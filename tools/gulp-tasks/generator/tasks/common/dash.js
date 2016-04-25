import cap from './cap';

export default function(val) {
    var segments =  val.split('.');

    for (var i = 0; i < segments.length; i++) {
        segments[i] = segments[i].toLowerCase();
    }

    return segments.join('-');
};
