/**
 * PROBLEM
 * A defanged IP address replaces every period "." with "[.]".
/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    return address.replace(/\./g,'[.]')
};