elements.powerhuman = {
    color: elements.human.color,
    category: "life",
    state: "solid",
    density: elements.human.density,
    behavior: elements.human.behavior,

    tempHigh: 999999999,
    tempLow: -999999999,

    tick: function(pixel) {
        // Stay alive
        pixel.dead = false;

        // Remove burning
        pixel.burning = false;
        pixel.burn = 0;

        // Remove electricity
        pixel.charge = 0;
        pixel.chargeCD = 0;

        // Remove radiation and poison
        pixel.radiation = 0;
        pixel.poison = 0;

        // Keep temperature normal
        pixel.temp = 37;
    }
};