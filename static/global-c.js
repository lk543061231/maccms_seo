(function() {
    layui.use(['form'], function() {
        var form = layui.form
        form.on('select(tabVersion)', function(data) {
            if (data.value == 'v10') {
                window.location.href = "www.maccms.net/v10.html"
            } else if (data.value == 'v8') {
                window.location.href = "www.maccms.net/v8.html"
            }
        })
    });

})()