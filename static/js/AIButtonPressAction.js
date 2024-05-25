$(document).ready(function() {
    $('#button').click(function() {
        var smallInput = $('#user_input').val();
        $.post('/submit', {small_input: smallInput}, function(data) {
            $('#math_formula_result').val(data.math_formula_result);
        });
    });
});