var _ = require('underscore');
var transform = {
    order: function (array, subbase, base, loc) {
        var hitBase = false;
        var tempBefore = [];
        var tempAfter = [];
        var tempHold = array.filter(function (n) {
            if (n.indexOf(base) === -1) {
                if (hitBase === false) {
                    tempBefore.push(n)
                } else {
                    tempAfter.push(n)
                }
                return n
            }
            else if (n.indexOf(base) != -1) {
                hitBase = true
            }

        });
        var subArr = [], baseArr = [];
        var currentIndex = 0;
        subbase = subbase.reverse();
        for (var i = 0; i < subbase.length; i++) {
            subArr = array.filter(function (n) {
                if (n.indexOf(subbase[i]) != -1) {
                    return n
                }
            });
            baseArr = array.filter(function (n) {
                if (n.indexOf(base) != -1 && n.indexOf(subbase[i]) === -1) {
                    return n
                }

            });
            subArr = subArr.reverse();
            subArr.forEach(function (n) {
                baseArr.unshift(n);
            });
            array = baseArr;
        }
        if (!loc) {
            tempBefore = tempBefore.reverse();
            tempBefore.forEach(function (n) {
                array.unshift(n);
            });
            tempAfter.forEach(function (n) {
                array.push(n);
            });
        }
        if (loc === 'start') {
            tempHold = tempHold.reverse();
        }
        tempHold.forEach(function (n) {
            if (loc === 'end') {
                array.push(n);
            } else if (loc === 'start') {
                array.unshift(n);
            }
        });
        return array;
    },
    remove: function (array, remObject, base) {
        if (remObject.include) {
            return array.filter(function (n) {
                var returnThis = false;
                substringloop(n,remObject.include,function(r) {
                    if (n.indexOf(base) != -1 && r ===true || n.indexOf(base) === -1  ) {
                    returnThis = true
                }
            });
                    if(returnThis === true) {return n};
            })
        } else if (remObject.exclude) {
            return array.filter(function (n) {
                var returnThis = false;
                substringloop(n,remObject.exclude,function(r) {
                    if (n.indexOf(base) != -1 && r ===false || n.indexOf(base) === -1  ) {
                    returnThis = true
                }
            });
                    if(returnThis === true) {return n};
            })
        } else {
            return array;
        }
    }
};
module.exports = transform;

var substringloop = function(value,object,callback) {
       var index = 0;
        var deleteIt = false;
    var loopIT = function(index) {
        if(value.indexOf(object[index]) != -1){
            deleteIt = true;
              return callback(true)
        }
        if(index != object.length) {
            index++;
            loopIT(index);
        } else {
              return callback(deleteIt);
        }
    };
    loopIT(index);

};
