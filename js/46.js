// estructura de código js para nyuestro ejemplo de formularios parte 3 validación
$(document).ready(function(){
   $("#form_datos").validate({
      rules:{
         nombre:"required",
         f_nacimiento:{
            required:true,
            date:true,
         },
         mail:{
            required:true,
            email:true,
         }
      },
      messages:{
         nombre:"Ingrese un Nombre",
         f_nacimiento:"ingrese una fecha válida mm/dd/aaaa",
         mail:"ingrese un mail válido",
         // mail:{
         //    required:"Ingresa un mail válido",
         //    mail:"",
         // }
      }
   });
});

