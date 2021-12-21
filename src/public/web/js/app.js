$(document).ready(function() {

    $(document).on('click', '#show-modalQuickview', function() {
        // var dataId = $(this).attr("data-id");
        $.ajax({
            url: '/',
            method: 'POST',
            dataType: 'json',
            data: { id: dataId },
            success: function(product) {

                $('.img-modal').attr('src', `${product.image}`)
                $('.img-modal').attr('data-thumb', `${product.image}`)
                $('#product-name').text(product.name)
                $('#product-price').text('$' + product.price)
                $('#product-desc').text(product.description)
                for (var i = 0; i < product.size.length; i++) {
                    var s = `<option>Size ${product.size}</option>`
                    $('#product-size').append(s)
                }
                for (var i = 0; i < product.color.length; i++) {
                    var c = `<option>${product.color}</option>`
                    $('#product-color').append(c)
                }
            },
            error: function(response) {
                alert('server error')
            }
        });
    });
})