elements.powerhuman = {
    color: elements.human.color,
    category: "life",
    state: "solid",
    density: elements.human.density,
    behavior: elements.human.behavior,

    tempHigh: 999999999,
    tempLow: -999999999,

    reactions: {
        electricity: {
            elem1: "powerhuman",
            chance: 1
        },

        malware: {
            elem1: "human",
            chance: 1
        }
    },

    tick: function(pixel) {
        // Once powered up, protect the human
        pixel.dead = false;
        pixel.burning = false;
        pixel.burn = 0;
        pixel.charge = 0;
        pixel.chargeCD = 0;
        pixel.radiation = 0;
        pixel.poison = 0;
        pixel.temp = 37;
    }
};
