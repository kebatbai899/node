const { PI } = Math;

exports.area = (r) => PI * r ** 2;

exports.circumference = (r) => 2 * PI * r;

exports.total = function (area, circumference){
    return area + circumference;
}