$(document).ready(function(){
    $('#table-cliente').on('click', 'button.btn-edit',function(e){
        e.preventDefault()

        $('.modal-title').empty()
        $('.modal-body').empty()

        $('.modal-title').append('Ben vindo ao vizualizar pessoas ai')

        let id = `ID=${$(this).attr('id')}`

        $.ajax({
            type: 'POST',
            dataType: 'json',
            assync: true,
            data: id,
            url:'src/cliente/model/view.php',
            success:function(dado){
                if(dado.tipo == 'success'){
                $('.modal-body').load('src/cliente/view/form-cliente.html', function (){

                    $('#NOME').val(dado.dados.NOME)
    
                    $('#TELEFONE').val(dado.dados.TELEFONE)

                    $('#ID').val(dado.dados.ID)


                })
                

                $('.btn-save').show()
                $('.btn-save').removeAttr('data-operation')
                $('#modal-cliente').modal('show')
            }else{
                Swal.fire({
                    title: 'Sistema',
                    text: dado.message,
                    icon:dado.tipo,
                    confirmButtonText: 'OK'
                })
            }
            }
        })
    })
})