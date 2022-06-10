const production = true;

export const environment = { 
    production: production,
    basePath: production? "https://bootcamp-2022.devtest.ge/api" : "http://192.168.42.11:8060",
}