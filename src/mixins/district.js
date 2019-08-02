import netAPI from '@/api';
function insertOption(list, valList, index, fillList) {
  let value = valList[index];
  for (let i = 0, l = list.length; i < l; i++) {
    if (value === list[i].code) {
      if (index + 1 === valList.length) {
        list[i].leafRegions = fillList;
      } else {
        insertOption(list[i].leafRegions, valList, index + 1, fillList);
      }
    }
  }
}
export default {
  methods: {
    // 获取省市区
    getDistrict(parentCode, collection, callback) {
      netAPI.getDistrict(parentCode).then(({ leafRegions }) => {
        leafRegions.forEach(item => {
          // item.children = [];
          // 澳门特别行政区
          if (item.code === '00853') {
            item.leafRegions = undefined;
          }
          collection.push(item);
        });
        callback && callback();
      });
    },
    // 选取上级，获取下级
    selectDistrict(collection, val, limit = 3) {
      let l = val.length;
      netAPI.getDistrict(val[l - 1]).then(({ leafRegions }) => {
        if (leafRegions && leafRegions.length > 0) {
          if (val.length + 1 === limit) {
            for (let i = 0, l = leafRegions.length; i < l; i++) {
              leafRegions[i].leafRegions = undefined;
            }
          }
          insertOption(collection, val, 0, leafRegions);
        } else {
          insertOption(collection, val, 0, undefined);
        }
      });
    },
    setDistrict(collection, value, index, limit = 3) {
      netAPI.getDistrict(value[index]).then(({ leafRegions }) => {
        if (index + 2 === value.length) {
          for (let i = 0, l = leafRegions.length; i < l; i++) {
            leafRegions[i].leafRegions = undefined;
          }
        }
        for (let i = 0, l = collection.length; i < l; i++) {
          if (value[index] === collection[i].code) {
            collection[i].leafRegions = leafRegions;
            if (index + 2 < value.length) {
              this.setDistrict(leafRegions, value, ++index, limit);
            }
          }
        }
      });
    },
    // 根据当前的省市区值，获取label内容
    getDicAll(value, collection) {
      this.$nextTick(() => {
        netAPI.getDistrict(value[0]).then(response => {
          let temp = response.items;
          collection.forEach((v, i) => {
            if (v.code === value[0]) {
              v.children = temp.map(vv => {
                if (value.length > 2) {
                  return {
                    name: vv.name,
                    code: vv.code,
                    children: []
                  };
                } else {
                  return {
                    name: vv.name,
                    code: vv.code
                  };
                }
              });
            }
          });
          if (value.length > 2) {
            netAPI.getDistrict(value[1]).then(response => {
              let temp = response.items;
              collection.forEach((v, i) => {
                if (v.code === value[0]) {
                  v.children.forEach((vv, j) => {
                    if (vv.code === value[1]) {
                      vv.children = temp.map(vvv => {
                        return {
                          name: vvv.name,
                          code: vvv.code
                        };
                      });
                    }
                  });
                }
              });
            });
          }
        });
      });
    },
    // 省市区选择发生变化
    districtChange(value, collection) {
      let i = value.length;
      netAPI.getDistrict(value[i - 1]).then(response => {
        let temp = response.items;
        netAPI.getDistrict(response.items[0].code).then(response => {
          if (response.items.length === 0) {
            if (value.length === 1) {
              collection.forEach((v, i) => {
                v.children = temp.map(vv => {
                  return {
                    name: vv.name,
                    code: vv.code
                  };
                });
              });
            } else {
              collection.forEach((v, i) => {
                v.children.forEach((vv, j) => {
                  vv.children = temp.map(vvv => {
                    return {
                      name: vvv.name,
                      code: vvv.code
                    };
                  });
                });
              });
            }
          } else {
            collection.forEach((v, i) => {
              v.children = temp.map(vv => {
                return {
                  name: vv.name,
                  code: vv.code,
                  children: []
                };
              });
            });
          }
        });
      });
    }
  }
};
