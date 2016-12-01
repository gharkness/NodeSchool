var domify = require('domify');

var html = '<div>Hello <span class="name"></span>!</div>';

module.exports = Widget;

function Widget() {
    if (!(this instanceof Widget)) return new Widget;
    this.html_elem = domify(html);
}

Widget.prototype.setName = function(name) {
    this.html_elem.querySelector('.name').textContent = name;
};

Widget.prototype.appendTo = function(location) {
    location.appendChild(this.html_elem);
};
