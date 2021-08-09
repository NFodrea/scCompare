export type Ship = {
    name: string;
    ccu?: number;
    original?: number;
};

export type UpgradeCCU = {
    from: string,
    to: string,
    price: number
}

const shipList: Ship[] = [
    { name: "350R", ccu: 120 },
    { name: "600I Explorer", ccu: 296 },
    { name: "600I Touring", ccu: 286 },
    { name: "A2 Hercules", ccu: 439 },
    { name: "Apollo Medivac", ccu: 196 },
    { name: "Apollo Triage", ccu: 206 },
    { name: "Aquila", ccu: 222 },
    { name: "Ares Inferno", ccu: 169 },
    { name: "Ares Ion", ccu: 169 },
    { name: "Avenger Warlock", ccu: 79 },
    { name: "Ballista", ccu: 111 },
    { name: "Blade", ccu: 196, original: 289 },
    { name: "Buccaneer", ccu: 100, original: 132 },
    { name: "C2 Hercules", ccu: 291 },
    { name: "Carrack", ccu: 345 },
    { name: "Carrack w/C8X", ccu: 376 },
    { name: "Carrack Expedition", ccu: 381 },
    { name: "Carrack Expedition w/C8X", ccu: 401 },
    { name: "Caterpillar", ccu: 222 },
    { name: "Corsair", ccu: 164 },
    { name: "Crucible", ccu: 280 },
    { name: "Cutlass Black Best in Show Edition 2949", ccu: 100 },
    { name: "Cutlass Black", ccu: 100 },
    { name: "Cutlass Blue", ccu: 138 },
    { name: "Cutlass Red", ccu: 106 },
    { name: "Cyclone MT - WB", ccu: 74 },
    { name: "Defender", ccu: 169, original: 232 },
    { name: "Eclipse", ccu: 222 },
    { name: "Endeavor", ccu: 280 },
    { name: "F7C-M Heartseeker", ccu: 138 },
    { name: "F7C-M Super Hornet", ccu: 132 },
    { name: "F7C Hornet Wildfire", ccu: 143 },
    { name: "Freelancer MAX", ccu: 127 },
    { name: "Freelancer MIS", ccu: 143 },
    { name: "FORTUNA PACK 2951 WB (Mercury + Cyclone MT)", ccu: 327 },
    { name: "Genesis", ccu: 286 },
    { name: "Gladiator", ccu: 138 },
    { name: "Gladius", ccu: 85 },
    { name: "Gladius Valiant", ccu: 100 },
    { name: "Glaive", ccu: 280 },
    { name: "Hammerhead", ccu: 492 },
    { name: "Hawk", ccu: 90 },
    { name: "Herald", ccu: 79 },
    { name: "Hull B", ccu: 85 },
    { name: "Hull C", ccu: 206 },
    { name: "Hull D", ccu: 280 },
    { name: "Hurricane", ccu: 138, original: 204 },
    { name: "Khartu-Al", ccu: 132 },
    { name: "M2 Hercules", ccu: 312 },
    { name: "M50", ccu: 95 },
    { name: "Mercury Star Runner", ccu: 175 },
    { name: "Merchantman", ccu: 280 },
    { name: "Mole", ccu: 228 },
    { name: "Nautilus", ccu: 492 },
    { name: "Nomad - WB", ccu: 95 },
    { name: "Nova Tank", ccu: 106, original: 123 },
    { name: "Orion", ccu: 429 },
    { name: "Perseus", ccu: 423 },
    { name: "Phoenix - IAE 2950", ccu: 415 },
    { name: "Prospector", ccu: 127 },
    { name: "Prowler", ccu: 286 },
    { name: "Razor", ccu: 158 },
    { name: "Razor EX", ccu: 127 },
    { name: "Razor LX", ccu: 122 },
    { name: "Reclaimer", ccu: 286 },
    { name: "Reclaimer Best in Show Edition 2949", ccu: 296 },
    { name: "Redeemer", ccu: 201 },
    { name: "Retaliator Base", ccu: 122 },
    { name: "Retaliator Bomber", ccu: 196 },
    { name: "Sabre", ccu: 132 },
    { name: "Sabre Comet", ccu: 138 },
    { name: "Santokyai", ccu: 164 },
    { name: "SRV", ccu: 130 },
    { name: "Starfarer", ccu: 222 },
    { name: "Starfarer Gemini", ccu: 265 },
    { name: "Talon", ccu: 95 },
    { name: "Talon Shrike", ccu: 95 },
    { name: "Taurus", ccu: 122 },
    { name: "Terrapin", ccu: 164 },
    { name: "Valkyrie", ccu: 259 },
    { name: "Valkyrie Best in Show Edition 2950", ccu: 280 },
    { name: "Vanguard Harbinger", ccu: 212 },
    { name: "Vanguard Hoplite", ccu: 185, original: 253 },
    { name: "Vanguard Sentinel", ccu: 191 },
    { name: "Vanguard Warden", ccu: 200 },
    { name: "Vulcan", ccu: 143 },
    { name: "Vulture", ccu: 111 },
];

export default shipList;