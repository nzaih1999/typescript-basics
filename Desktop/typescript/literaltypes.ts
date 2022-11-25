type Season = "summer" | "spring" | "winter" | "autumn"

function seasonsGreeting (season:Season){
 if(season==='autumn') return ("Hello")
 if(season==='spring') return ("Hey")
 if(season==='summer') return ("Hellllo")
 if(season==='winter') return ("Summer is calling")
}

seasonsGreeting('autumn')
