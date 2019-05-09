var B = function(args) {
    // Constructor
    if (this.__proto__.constructor !== B) {
        return new B(args);
    }

    // Arguments
    this.args = args;

    // Methods

    // to set html
    this.h = function(v) {
        document.getElementById(args).innerHTML = v
    }
    // to set value
    this.v = function(v) {
        document.getElementById(args).value = v
    }
    // to set text
    this.t = function(v) {
        document.getElementById(args).innerText = v
    }
};
