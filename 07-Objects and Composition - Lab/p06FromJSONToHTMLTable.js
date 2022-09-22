function fromJSONToHTMLTable(input) {
    let parseData = JSON.parse(input);
    let columnNames = Object.keys(parseData[0]);
    let result = '<table>\n';

    appendHeaders(columnNames);
    function appendHeaders(columnNames) {
        result += `    <tr>`;
        for (let columnName of columnNames) {
            result += `<th>${columnName}</th>`;
        }
        result += `</tr>\n`;
    }

    let values1 = parseData.map(obj => Object.values(obj));
    appendValues(values1);
    function appendValues(values1) {
        for (let elOfValues1 of values1) {
            result += `    <tr>`;
            for (let i = 0; i < elOfValues1.length; i++) {
                result += `<td>${escapeHTML(elOfValues1[i])}</td>`;
            }
            result += `</tr>\n`;
        }
    }
    function escapeHTML(value) {
        return value
            .toString()
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

    result += `</table>`;
    console.log(result);
}

fromJSONToHTMLTable(
    `[{"Name":"Stamat","Score":5.5},
    {"Name":"Rumen", "Score":6}]`);
console.log('-----------------');
fromJSONToHTMLTable(
    `[{"Name":"Pesho",
    "Score":4,
    "Grade":8},
   {"Name":"Gosho",
    "Score":5,
    "Grade":8},
   {"Name":"Angel",
    "Score":5.50,
    "Grade":10}]`)

