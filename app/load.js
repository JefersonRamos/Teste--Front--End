import { URL } from '../config/auth.js'

$.get(URL,
    function (data, textStatus, jqXHR) {
        for(var i = 0; i < data.length; i++){
            var htmlString = $("#container").html();
            const layout = `<ul>
                <li>${data[i]['_id']}</li>
                <li>${data[i]['produto']}</li>
                <li>${data[i]['quant']}</li>
                <li>${data[i]['price']}</li>
                <li>${data[i]['client']}</li>
                <li>${data[i]['bool']}</li>
                <li><button>Select</button> <button>Delete</button></li>
            </ul>`;


            htmlString += layout;
            $("#container").html(htmlString);
        }
    }
);