$(document).ready(function(){ 
        function hexToRGBA(hex, opacity) {
                return 'rgba(' + (hex = hex.replace('#', '')).match(new RegExp('(.{' + hex.length/3 + '})', 'g')).map(function(l) { return parseInt(hex.length%2 ? l+l : l, 16) }).concat(opacity||1).join(',') + ')';
            }   

        var colorArray = [
        'FF6633', 'FFB399', 'FF33FF', 'FFFF99', '00B3E6', 
        'E6B333', '3366E6', '999966', '99FF99', 'B34D4D',
        '80B300', '809900', 'E6B3B3', '6680B3', '66991A', 
        'FF99E6', 'CCFF1A', 'FF1A66', 'E6331A', '33FFCC',
        '66994D', 'B366CC', '4D8000', 'B33300', 'CC80CC', 
        '66664D', '991AFF', 'E666FF', '4DB3FF', '1AB399',
        'E666B3', '33991A', 'CC9999', 'B3B31A', '00E680', 
        '4D8066', '809980', 'E6FF80', '1AFF33', '999933',
        'FF3380', 'CCCC00', '66E64D', '4D80CC', '9900B3', 
        'E64D66', '4DB380', 'FF4D4D', '99E6E6', '6666FF'
        ];

        colorArray.forEach((color, index) => {
                var dynCol = hexToRGBA(color);

                $('.row-1').append(
                        $('<div/>')
                          .attr("id", color)
                          .addClass("col-4 col-sm-3 col-md-2 box")                     
                      );
                $('#'+color).append(
                        $('<div/>')
                        .addClass("color "+color )
                )
        
                $('.'+color).css("background-color", "#"+color);

                $('.'+color)
                   .append(
                           $('<div/>')
                           .addClass('hd s-'+color)
                           .append(
                                   $('<div/>')
                                   .attr('data-clipboard-text', "#"+color)
                                   .addClass('colr-1')
                                   .text(color)
                                   )
                           .append(
                                   $('<div/>')
                                   .attr('data-clipboard-text', dynCol)
                                   .addClass("colr-1")
                                   .text(dynCol)
                           )
                   )
                // var hex=color;
                // console.log(hexToRGBA(hex))

                $("."+color).on({
                    mouseover: function (e) {
                        $('.s-'+color).addClass('show');

                    },
                    mouseleave: function () {
                        //stuff to do on mouse leave
                        $('.s-'+color).removeClass('show');
                    }
                });
                    

        })

        var clipboard = new ClipboardJS('.colr-1');
        clipboard.on('success', function(e) {
                var col = e.trigger.innerHTML;
                $(e.trigger).text('Copied');

                setTimeout(
                        () =>{
                        $(e.trigger).text(col);
                         }, 1500
                )
                e.clearSelection();
            });


});