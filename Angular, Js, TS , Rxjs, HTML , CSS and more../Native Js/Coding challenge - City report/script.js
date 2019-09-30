// CODING CHALLENGE

/*

Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets

It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.

At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (forumla: number of trees/park area)
2. Average age of each town's park (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal

All the report data should be printed to the console.
*/


/*          City          */ 
let city = {
    parks : [],
    streets : [],
    number_of_parks : () => {
        return city.parks.length;
    },
    number_of_streets : () => {
        return city.streets.length;
    }
    
} 

/*          City element          */ 
class Element{
    constructor(name , build_year){
        this.name = name;
        this.build_year = build_year;
    }
}

/*          Park          */ 
class Park extends Element{
    constructor(name , build_year , number_of_trees,park_area){
        super(name, build_year);
        this.number_of_trees = number_of_trees;
        this.park_area = park_area;
    }
    getParkInfo(){ 
        return `${this.name} Park has a tree density of ${this.number_of_trees/this.park_area} trees per square km`;
    }

    static getAverageAgeOfParks(){
        return `our ${city.number_of_parks()} parks has an average age of ${Park.sumAges()} years`;
    }

    static sumAges(){
        let averageAges = 0;
        let today = new Date().getFullYear();
        city.parks.forEach(current => {
            averageAges += Number(today) - Number(current.build_year);
        })
        averageAges = Number(averageAges) / city.number_of_parks();
        return averageAges;
    }
}

/*          Street          */ 
class Street extends Element{
    constructor(name,build_year,street_length , size = "normal"){
        super(name,build_year);
        this.street_length = street_length;
        this.size = size;
    }
    getStreetInfo(){
        return `${this.name} , built in ${this.build_year} , is a ${this.size} street`;
    }

    static getTotalLength(){
        let totalLength = 0;
        city.streets.forEach(current =>{
            totalLength += current.street_length;
        })
        return totalLength;
    }

    static getAverageLength () {
        return Street.getTotalLength() / city.number_of_streets();
    }
}


/*          Data reporting          */ 
let report = {

/*          Parks          */ 
    parks : {
    getTreeDensity : () => {
        city.parks.forEach( current => {
           console.log(current.getParkInfo());
        })
    },
    getAverageAgeOfParks : () => console.log(Park.getAverageAgeOfParks()),

    getMoreThan1000 : () => {
        city.parks.forEach(current => {
            if(current.number_of_trees > 1000){
                console.log(`${current.name} has more than 1000 trees`);
            }
        })
    }
},

/*          Streets          */ 
    streets :{
        reportLengths : () => console.log(`our ${city.number_of_streets()} streets have a total length of ${Street.getTotalLength()} km with an average of ${Street.getAverageLength()} km`),

        reportStreetInfo : () => city.streets.forEach(current => console.log(current.getStreetInfo()))
    },

    /*          Report all data          */ 
    reportData : () => {
        console.log("------Parks Report-------");
        report.parks.getAverageAgeOfParks();
        report.parks.getTreeDensity();
        report.parks.getMoreThan1000();
        console.log("------Streets Report-------");
        report.streets.reportLengths();
        report.streets.reportStreetInfo();
        
    }
}


/*          set streets and parks          */ 
city.parks = [new Park("1" , 1990 , 1001,2000),new Park("2" , 1991 , 3011,400),
new Park("3" , 1992 , 200,600),new Park("4" , 1993 , 100,1000)];
city.streets = [new Street("1" , 2000 , 1000, "huge"),new Street("2" , 2010 ,300),
new Street("3" , 2015 ,400, "big")];

report.reportData();