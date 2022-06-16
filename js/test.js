/*var contractsc = document.querySelectorAll(".n_cont");
const numbers = contractsc.length;
document.querySelector(".number-count").innerHTML = numbers;

var contractsd = document.querySelectorAll(".n_cont-m");
const numbersm = contractsd.length;
document.querySelector(".number-count-mes").innerHTML = numbersm;
*/

let $ = document.querySelector.bind(document);

let contratos = [];

function lancar(event) {
    event.preventDefault();

    let contrato = {
        number: $('#contract-number').value,
        id: $('#user-id').value,
    };

    contratos.push(contrato);
    limparFormulario();
    renderizarContratos();
    $('#contract-number').focus();
}

function limparFormulario() {
    $('#contract-number').value = '';
    $('#user-id').value = '---';
}

function renderizarContratos() {
    if (contratos) {
        let htmlContratos = '';

        for(let i = contratos.length - 1; i > -1; i--) {
            let contrato = contratos[i];

            let html = `
            <tr>
                <td class="n_cont">${contrato.number}</td>
                <td>${contrato.id}</td>
            </tr>
            `;

            htmlContratos += html;
        }


        $('#tbody').innerHTML = htmlContratos;
        $('#tbodyy').innerHTML = htmlContratos;
    }
}