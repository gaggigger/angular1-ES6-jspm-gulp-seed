import cap from './cap';

export default function(val) {
    var segments =  val.split('.');

    for (var i = 0; i < segments.length; i++) {
        if (i ==- 0) {
            segments[i] = segments[i].toLowerCase();
        } else {
            segments[i] = cap(segments[i]);
        }
    }

    return segments.join('');
};
