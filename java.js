$(document).ready(function () {
    $("table").hide();

    $("#valida").click(function () {
        validaCPF();
        validaEmail();
        validaNome();
        validaTelefone();
        validarData();
    })

    $("#enviar").click(function () {
        enviar();
        validaCPF();
        validaEmail();
        validaNome();
        validaTelefone();
        validarData();
        $("table").show();
    });
});

function validaNome() {
    if ($('#nm').val().length > 0) {
        $('#nm').attr('class', '');
        $("#nome_validado").text("");
    } else if ($('#nm').val().length == 0) {
        $('#nm').attr('class', 'erro');
        $("#nome_validado").text("Nome inválido");
    }
}

function validaEmail() {
    if ($("#em").val().includes("@")) {
        $('#em').attr('class', '');
        $("#email_validado").text("");
    } else {
        $('#em').attr('class', 'erro');
        $("#email_validado").text("Email inválido");
    }
}

function validaTelefone() {
    if ($('#tel').val() == "00000000000" || $('#tel').val() == "11111111111" ||
        $('#tel').val() == "22222222222" || $('#tel').val() == "33333333333" ||
        $('#tel').val() == "44444444444" || $('#tel').val() == "55555555555" ||
        $('#tel').val() == "66666666666" || $('#tel').val() == "77777777777" ||
        $('#tel').val() == "88888888888" || $('#tel').val() == "99999999999" ||
        $('#tel').val().length != 11 || $('#tel').val().length == 0) {
        $('#tel').attr('class', 'erro');
        $("#telefone_validado").text("Telefone inválido");
    } else {
        $('#tel').attr('class', '');
        $("#telefone_validado").text("");
    }
}

function validaCPF() {
    var Soma;
    var Resto;
    Soma = 0;

    if ($('#cpf').val() == "00000000000" || $('#cpf').val() == "11111111111" ||
        $('#cpf').val() == "22222222222" || $('#cpf').val() == "33333333333" ||
        $('#cpf').val() == "44444444444" || $('#cpf').val() == "55555555555" ||
        $('#cpf').val() == "66666666666" || $('#cpf').val() == "77777777777" ||
        $('#cpf').val() == "88888888888" || $('#cpf').val() == "99999999999" ||
        $('#cpf').val().length == 0) {
        $('#cpf').attr('class', 'erro');
        $("#cpf_validado").text("CPF inválido");
        return false;
    } else {
        for (i = 1; i <= 9; i++) Soma = Soma + parseInt($('#cpf').val().substring(i - 1, i)) * (11 - i);
        Resto = (Soma * 10) % 11;

        if ((Resto == 10) || (Resto == 11)) Resto = 0;
        if (Resto != parseInt($('#cpf').val().substring(9, 10))) {
            $('#cpf').attr('class', 'erro');
            $("#cpf_validado").text("CPF inválido");
            return false;
        } else {
            Soma = 0;
            for (i = 1; i <= 10; i++) Soma = Soma + parseInt($('#cpf').val().substring(i - 1, i)) * (12 - i);
            Resto = (Soma * 10) % 11;

            if ((Resto == 10) || (Resto == 11)) Resto = 0;
            if (Resto != parseInt($('#cpf').val().substring(10, 11))) {
                $('#cpf').attr('class', 'erro');
                $("#cpf_validado").text("CPF inválido");
                return false;
            } else {
                $('#cpf').attr('class', '');
                $("#cpf_validado").text("");
                return true;
            }
        }
    }
}

function validarData() {
    if ($("#dia").val() > 31 || $("#dia").val() <= 0) {
        $('#dia, #data').attr('class', 'erro');
        $("#dia_validado").text("Dia inválido");
        $("#ponto1").text(".");
    } else {
        $('#dia, #data').attr('class', '');
        $("#dia_validado").text("");
        $("#ponto1").text("");
    }

    if ($("#mes").val() > 12 || $("#mes").val() <= 0) {
        $('#mes, #data').attr('class', 'erro');
        $("#mes_validado").text("Mês inválido");
        $("#ponto2").text(".");
    } else {
        $('#mes, #data').attr('class', '');
        $("#mes_validado").text("");
        $("#ponto2").text("");
    }

    if ($("#ano").val() > 2022 || $("#ano").val() <= 0) {
        $('#ano, #data').attr('class', 'erro');
        $("#ano_validado").text("Ano inválido");
        $("#ponto3").text(".");
    } else {
        $('#ano, #data').attr('class', '');
        $("#ano_validado").text("");
        $("#ponto3").text("");
    }
}

function enviar() {
    $("#nomet").text($("#nm").val());
    $("#emailt").text($("#em").val());
    $("#telefonet").text($("#tel").val());
    $("#cpft").text($("#cpf").val());

    if ($("#masc").prop("checked")) {
        $("#sexot").text("Masculino");
    } else if ($("#fem").prop("checked")) {
        $("#sexot").text("Feminino");
    } else if ($("#outr").prop("checked")) {
        $("#sexot").text("Outro");
    }

    if ($("#dia").val() > 0 && $("#dia").val() <= 31 && ($("#mes").val() > 0) && ($("#mes").val() <= 12) && ($("#ano").val() > 0)) {
        $("#datat").text($("#dia").val() + "/" + $("#mes").val() + "/" + $("#ano").val());
    } else if ($("#dia").val() < 0 || $("#dia").val() > 31 || ($("#mes").val() < 0) || ($("#mes").val() > 12) || ($("#ano").val() < 0)) {
        $("#datat").text("");
    }

}