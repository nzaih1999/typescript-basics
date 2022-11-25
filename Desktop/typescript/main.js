var car = { wheels: 4, color: 'white' };
//extends additional properties
var apple = { name: 'apple', color: 'red', calories: '5' };
apple.vitaminA = "50mg";
//enums and tuples
var Seasons;
(function (Seasons) {
    Seasons[Seasons["winter"] = 0] = "winter";
    Seasons[Seasons["spring"] = 1] = "spring";
    Seasons[Seasons["summer"] = 2] = "summer";
    Seasons[Seasons["autumn"] = 3] = "autumn";
})(Seasons || (Seasons = {}));
function seasonsGreetings(season) {
    if (season === Seasons.autumn)
        return ("Hello");
    if (season === Seasons.winter)
        return ("Hey");
    if (season === Seasons.spring)
        return ("Hellllo");
    if (season === Seasons.summer)
        return ("Summer is calling");
}
seasonsGreetings(Seasons.spring);
//unions
