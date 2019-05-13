var B = function(args) {
    // Constructor
    if (this.__proto__.constructor !== B) {
        return new B(args);
    }

    // Arguments
    this.args = args;

    // Methods

    // To set html
    this.h = function(v) {
        document.getElementById(args).innerHTML = v;
    }
    // To set value
    this.v = function(v) {
        document.getElementById(args).value = v;
    }
    // To set text
    this.t = function(v) {
        document.getElementById(args).innerText = v;
    }
};

module.exports = B;
