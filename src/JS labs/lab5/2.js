function towns(data) {
        for (let i = 1; i < data.length; i++) {
            const [town, latitude, longitude] = data[i]
                .split(' | ')
                .map(x => x.trim());
    
            const townObj = {
                town,
                latitude: Number(latitude).toFixed(2),
                longitude: Number(longitude).toFixed(2)
            };
    
            console.log(`"Город | Широта | Долгота"`,townObj);
        }
    }
    
towns([
    
        "Москва | 55.7522 | 37.6156",
        "Beijing | 39.913818 | 116.363625",
    ]);
