var menu = {
    "parse_mode": "Markdown",
    "reply_markup": {
        "one_time_keyboard": true,
        //"keyboard": [[{
        "inline_keyboard":  [[
                            {text: 'Search By Stop Numbern', callback_data: 'stop'},
                            {text: 'Search By Address', callback_data: 'send'},
                            {text: 'Search By Route', callback_data: 'delete'},
                            {text: 'Stops Near me', callback_data: 'delete'}], 
                            ["Cancel"]]
    }
};

module.exports = { menu };