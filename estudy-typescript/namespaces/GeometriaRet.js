"use strict";
// namespaces aninhados
var Geometria;
(function (Geometria) {
    let Areas;
    (function (Areas) {
        function retangulo(base, altura) {
            return base * altura;
        }
        Areas.retangulo = retangulo;
    })(Areas = Geometria.Areas || (Geometria.Areas = {}));
})(Geometria || (Geometria = {}));
