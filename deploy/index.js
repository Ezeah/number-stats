document.getElementById('calculate').addEventListener('click', function () {
    var list = document.getElementById('main-input').value;
    list = list.replaceAll(' ', '');
    list = list.split(',');
  
    list = list.map((item, index) => {
      return parseInt(item);
    })
  
    var operator = document.getElementById('operator').value;
    
    switch (operator) { 
        case 'sum':
            var sum = 0;
            for (var i = 0; i < list.length; i++) {
                sum += parseInt(list[i]);
            }
            document.getElementById('output').innerHTML = sum;
            break;
            
        case 'average': 
            var sum = 0;
            for (var i = 0; i < list.length; i++) {
                sum += parseInt(list[i]);
            }
            document.getElementById('output').innerHTML = sum / list.length;
            break;
           
        case 'min':
            var min = list[0];
            for (var i = 0; i < list.length; i++) {
                if (list[i] < min) {
                    min = list[i];
                }
            }
            document.getElementById('output').innerHTML = min;
            break;

        case 'max':
            var max = list[0];
            for (var i = 0; i < list.length; i++) {
                if (list[i] > max) {
                    max = list[i];
                }
            }
            document.getElementById('output').innerHTML = max;
            break;

        case 'median':
            // Sort the list
            list.sort(function(a, b) {
                return a - b;
            });

            // Calculate the median
            var median = 0;
            var middle = Math.floor(list.length / 2);
            if (list.length % 2 === 0) {
                median = (list[middle - 1] + list[middle]) / 2;
            } else {
                median = list[middle];
            }
            document.getElementById('output').innerHTML = median;
            break;

        case 'mode':
            // Calculate the mode
            var modeMap = {};
            var maxCount = 0;
            var modes = [];

            for (var i = 0; i < list.length; i++) {
                var num = list[i];
                modeMap[num] = (modeMap[num] || 0) + 1;

                if (modeMap[num] > maxCount) {
                    modes = [num];
                    maxCount = modeMap[num];
                } else if (modeMap[num] === maxCount) {
                    modes.push(num);
                }
            }

            document.getElementById('output').innerHTML = modes.join(', ');
            break;

        case 'range':
            var min = list[0];
            var max = list[0];
            for (var i = 0; i < list.length; i++) {
                if (list[i] < min) {
                    min = list[i];
                }
                if (list[i] > max) {
                    max = list[i];
                }
            }
            document.getElementById('output').innerHTML = max - min;
            break;

        default:
            document.getElementById('output').innerHTML = 'Invalid operator';
            break;
    }
});
