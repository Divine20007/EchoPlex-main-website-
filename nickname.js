// --- 1. DATA: Nickname Categories ---
// Each array contains names/words suitable for that category.
// Add more names to each list for better diversity!
const nameData = {
    gaming: [
        "Shadow", "Blade", "Phoenix", "Viper", "Ghost", "Reaper", "Storm", "Blitz", "Dragon", "Hunter",
        "Night", "Pixel", "Byte", "Synth", "Volt", "Glitch", "Fury", "Nexus", "Oracle", "Rogue",
        "Specter", "Titan", "Vortex", "Warden", "Zero", "Bolt", "Echo", "Aura", "Nebula", "Vector",
        "Iron", "Steel", "Knight", "Ace", "Jinx", "Ragnar", "Seraph", "Valkyrie", "Dread", "Grim", "Deadshot","KillerInstinct","StormBringer","ShadowFox","ThunderStrike","BlazingSword","SilentKiller","PhantomAssassin","TitanSlayer","ZeusBolt","AlphaWolf","Frostbite","VenomViper","LaserBeam","BulletProof","CyberWolf","DarkAvenger","GhostGamer","BombSquad","FieryPhoenix","SavageSlayer","NightStalker","SteelStorm","RocketRonin","DynamoDude","Sparklesiren","ToxicTitan","StealthSlayer","GamingGod","KillerKlaws","GlitchGamer","SolarFlare","FatalForce","BlackBolt","GoldenGlove","SuperStar","BlazeMaster","VoodooVixen","ShockWave","RapidFire","MatrixMaverick","ThunderThrone","TitaniumTank","HeavyMetal","BronzeBolt","MysticMage","WildWolfie","HeroHawk","SugarGlide","RapidRampage","TechTitan","VengeanceVortex","FatalFemme","BattleBrawler","KawaiiKiller","SunGod","RuffRockstar","LovelyLyrics","NightOwl","VenomVortex","GamerGhost","Bombastic","FieryFreak","ShadowShift","Lovestorm","CrazyCyber","PhoenixForce","KillerBee","GlitterGaze","StormSurge","RuffRounds","LovelyLogic","CyberCosmos","FatalFinish","GhostRider","BombSquad","FieryPhoenix","SavageSlayer","NightStalker","SteelStorm","RocketRonin","DynamoDude","Sparklesiren","ToxicTitan","StealthSlayer","GamingGod","KillerKlaws","GlitchGamer","SolarFlare","FatalForce","BlackBolt","GoldenGlove","SuperStar","BlazeMaster","VoodooVixen","ShockWave","RapidFire","MatrixMaverick","ThunderThrone","TitaniumTank","HeavyMetal","BronzeBolt","MysticMage","WildWolfie","HeroHawk","SugarGlide","RapidRampage","TechTitan","VengeanceVortex","FatalFemme","BattleBrawler","KawaiiKiller","SunGod","RuffRockstar","AxelVoid","ZephyrZeus","BladeMaster","Crusher99","FuryFist","HunterXL","MajorMayhem","NovaNinja","OmegaOutlaw","PsiPhoenix","QuasarQuest","RavenRouge","SpecterSlash","StormSquad","ThunderThor","VandalViper","XenonXero","ZeroCool","AlphaAce","BravoBolt","CharlieCobra","DeltaDagger","EchoEdge","FoxtrotFox","GulfGannon","HotelHawk","IndiaIcon","JulietJet","KiloKane","LimaLion","MikeMaverick","NovemberNinja","OscarOutcast","PapaPwnz","QuebecQuest","RomeoRogue","SierraSlasher","TangoTank","UniformUzi","VictorVandal","WhiskeyWolf","XrayXtreme","YankeeYoder","ZuluZealot","ApexAce","BionicBolt","CyclicCatcher","DemonicDash","EpicEcho","FatalFreak","GhastlyGamer","HavocHeist","InsaneIcon","JuggernautJolt","KrypticKiller","LuminousLaser","MysticMaven","NebulaNinja","OblivionOutlaw","PhantomPulse","QuantumQuest","RazorRogue","SpectacularSquad","ThunderousTitan","UltimateUprising","ViciousVortex","WreckingRampage","XtremeXylophonist","YellowstoneYank","ZenithZeal","ArcadeAce","BulletBrigade","CyberCatcher","DarkDomain","ElectricEdge","FrozenFury","GigaGamer","HyperHavoc","InfernoIcon","JoltJuggler","KillerKaboom","LuckyLaser","MegaMaven","NexusNightmare","OpticOutlaw","PixelPwnzer","QuakeQuester","RadiumRogue","ShadowShift","TechnoTitan","UltraUzi","ViralVandal","WarpathWolf","XenonXpert","YottaYoder","ZapperZealot","AstralAce","BlazingBandit","CelestialCatcher","DazzlingDash","EclipseEdge","FuriousFox","GlacialGamer","HallowedHavoc","IcyIcon","JadedJester","KickedKiller","LuminousLord"
    ],
    nature: [
        "MountainMan","RiverFlow","ForestFox","OceanBreeze","SunnySky","GreenLeaf","DesertDude","RainyDay","CloudNine","EarthBear","WildFlower","StonePath","ValleyVibes","SeaSalt","TreeHugger","MoonGlow","FreshGrass","BreezeBlow","HillTop","PineCone","MeadowMist","CoralReef","JungleJim","SkyPilot","FlowerPower","Woodland","AquaWave","MountainPeak","SoilSoul","NatureNinja","LeafyGreen","FoggyMorning","BranchOut","PetalPunk","RootDeep","Sunshine","Wilderness","CanyonCrew","GlacierGaze","LotusBloom","MossMagic","Evergreen","BambooBand","SandStorm","PeakPerformance","TerraVerde","OceanOasis","GardenGnome","Rainforest", "MountainMan","RiverFlow","ForestFox","OceanBreeze","SunnySky","GreenLeaf","DesertDude","RainyDay","CloudNine","EarthBear","WildFlower","StonePath","ValleyVibes","SeaSalt","TreeHugger","MoonGlow","FreshGrass","BreezeBlow","HillTop","PineCone","MeadowMist","CoralReef","JungleJim","SkyPilot","FlowerPower","Woodland","AquaWave","MountainPeak","SoilSoul","NatureNinja","LeafyGreen","FoggyMorning","BranchOut","PetalPunk","RootDeep","Sunshine","Wilderness","CanyonCrew","GlacierGaze","LotusBloom","MossMagic","Evergreen","BambooBand","SandStorm","PeakPerformance","TerraVerde","OceanOasis","GardenGnome","Rainforest","StormySummit","ThunderTornado","VolcanicVibe","AvalancheAce","BlizzardBoss","CycloneCatcher","DustDevil","EarthquakeEd","FrostyFox","GaleGordon","HurricaneHawk","IcebergIan","JetStreamJake","KhakiKrew","LandslideLarry","MeadowMike","NorthernNimbus","OasisOwen","PebblePete","QuicksilverQuinn","RockyRidge","SandstormSage","TidalTom","UmbrellaUlysses","VortexVictor","WaterfallWill","XericXander","YellowstoneYves","ZephyrZane","AlpineAce","BorealBrutus","CascadeCameron","DeltaDawn","EcosystemEcho","FaunaFreak","GlacialGlen","HabitantHank","IslandIgor","JungleJaxon","KettleKyle","LagoonLucas","MangroveMaverick","NatureNomad","OxygenOllie","PrairieParker","QuarryQuentin","RainmakerRyan","SavannahSage","TundraTyler","UluruUpton","VeldtVictor","WesterlyWyatt","XylophoniaXanthe","YosemiteYancy","ZionZane","AuroraAxel","BayouBrandon","ClementineCanyon","DawnDante","EmeraldEthan","FernFelipe","GeyserGavin","HazelHaven","IvoryIshan","JadeJensen","KarenKettle","LemerLance","MarinaMateo","NimbusNate","OpalOliver","PearlPablo","QuartzQuincy","RubyRohan","SageSantiago","TopazTroy","UmberUriel","VioletVictor","WyomingWyatt","XenonXerxes","YarrowYusuf","ZirconZane","AmazonAce","BlizzardBeck","CrystalCanyon","DrogonDrake","EchoElysium","FluxFountain","GroveGideon","HorizonHunt","IrisIan","JuniperJade","KaspianKrew","LyraLance","MoonstoneMaverick","NebulaNixon","OnyxOscar","PangaeaPete","QuartzQuest","RhinoRyder","SylvanSage","TritonTroy","UrsulaUlysses","VestaVictor","WyrmwoodWyatt","XanaduXanthe","YellowtailYoder","ZephyriaZane"
    ],
    love: [
        "Angel", "Sweetheart", "Honey", "Cuddle", "Dream", "Bliss", "Cherish", "Harmony", "Kindred", "Sparkle",
        "Amour", "Beloved", "Cupid", "Darling", "Ever", "Fleur", "Glow", "Heart", "Joy", "Kiss",
        "Lumi", "Muse", "Nova", "Opal", "Purity", "Rosebud", "Soul", "Treasure", "Unison", "Velvet", "SweetSerenity","LovelyLuna","HeartThrob","SugarSweet","LoveBomb","AngelWings","HoneyBunny","FluffyFavor","CuteCrush","SunshineSoul","RosePetal","ButtercupBloom","LoveLight","SweetheartSquad","ForeverFriend","HeartBeat","Lovestruck","SugarSpice","KawaiiKlove","MellowMuse","SparklesHeart","GlitterGaze","FairyDustLove","LovelyLucy","SweetSurprise","HeartMelody","LovePotion","SugarCookie","CinnamonLove","WarmHug","CozyCompanion","TenderTouch","KindredSpirit","LoveBreeze","SweetSurrender","HeartString","LovelyLyric","FlowerPowerLove","HoneyHoney","SweetpeaSpecial","LoveNotes","HeartfeltHaven","SugarShelter","Lovecastle","WarmWish","HeartWhisper","LoveSpark","SweetSentiment","CuteCompanion","Lovebirds","HeartOfGold","SugarRay","LoveMaven","WarmthWinner","HeartKeeper","LovelyLlama","SweetSeraph","LoveLegend","HeartthrobHero","SugarSensations","Lovewave","WarmWelcome","HeartHelper","LoveBangle","SweetSquad","CuteCourier","LovePetal","HeartSong","SugarGlideLove","LovelyLyrics","WarmWrap","HeartHaven","LoveHearts","SweetSurvivor","CuteChampion","LoveBuzz","WarmWorthy","HeartHopeful","SugarShield","LovelyLighthouse","HeartHero","LoveBurst","SweetSupport","WarmWise","HeartHarmony","LoveLink","SugarSmile","CuteCelebration","LovelyLaugh","WarmWishbone","HeartHype","LoveMagnet","SweetSensation","CozyCuddle","TenderTango","KindKindred","LoveLegacy","HeartGlow","SugarSphere","LovelyMomentum","WarmWave","Heartlight","LovePursuit","SweetSymphony","CuteCascade","LovelyLeap","WarmthWonder","HeartHorizon","LoveHunter","SugarSprinkle","Lovecast","WarmWishmaker","HeartHelperHive","LoveBrew","SweetSprout","CozyClan","TenderTerrain","KindKey","LoveLucid","HeartHammer","SugarStream","LovelyLuster","WarmWord","HeartHost","LoveHarbor","SweetSanctuary"
    ],
    horror: [
        "Grim", "Creep", "Phantom", "Screech", "Shade", "Whisper", "Grave", "Spook", "Nightmare", "Blight",
        "Raven", "Cinder", "Dusk", "Ember", "Gloom", "Haunt", "Lurker", "Malign", "Oblivion", "Pestilence",
        "Ruin", "Shadowfen", "Terror", "Vile", "Witch", "Ashen", "Crypt", "Dread", "Feral", "Ghoul",
        "Hollow", "Infest", "Mortal", "Omen", "Phobia", "Rot", "Sorrow", "Venom", "Wraith", "Abyss", "Skullcrusher","Bloodbath","Grave","Shadowfiend","Deathmonger","ZombieLord","VampireKiller","GhostReaper","Demonspawn","Slaughterhouse","CryptKeeper","Mummy","HorrorHound","Butcher","Carrion","Screamer","Nightmare","BloodyMary","GraveyardGhoul","PhantomPain","MurderMaze","CreepShow","Killzone","TheButcher","Bloodlust","Grottoscream","Darkseer","Madness","Pandemonium","Shadowborn","Deadwalker","Corpsegrinder","Voodoo","Hexbreaker","Soulreaper","GrimReaper","Bonebreaker","FleshEater","ScarletSpecter","Haunter","Malice","Doombringer","Ravenous","Slaughter","Terrorbyte","ZombieApocalypse","Deathscythe","Ghostwalker","BloodyBane","Demonic","Cryptdweller","Horrorific","Murderous","Nightshade","Obsidian","Plaguebringer","Quicksilver","Racketeer","Skeletal","Tombstone","Unholy","Vile","Warlock","Xenophobia","Yeti","Zombified","Abyssal","Bloodcurdling","Carnage","Dreadlord","Echoing","Frightmare","Ghoulish","Horrific","Infernal","Jigsaw","Killer","Lemonade","Macabre","Necrotic","Ominous","Pestilence","Quarantine","Riftwalker","Screamqueen","Torturous","Umbrawork","Vampiric","Wyrmwood","Xanthosis","Yellowfang","Zealot","Ashbringer","Blackdeath","Crazed","Darkprophet","Evilentity","Frostgrave","Ghastly","Hackslash","Insanity","Jaded","Krupt","Lurker","Mooncalf","Nightcrawler","Ooze","Pagan","Quellfire","Riotcaller","Shocktroop","Terrorfang","Ukku","Vindicator","Wolfbane","Xylara","Ymir","Zombievirus","Abomination","Bloodsoaked","Creeping","Doomwalker","Echochamber","Fleshripper","Gorefest","Heartstopper","Iconoclast","Jailbreaker","Killscream","Lazarus","Moonlit"
    ],
    fantasy: [
        "Aether", "Elara", "Griffin", "Mythic", "Rune", "Sorcerer", "Willow", "Zephyr", "Dragonborn", "Moonshadow",
        "Starlight", "Whisperwind", "Silverleaf", "Ironheart", "Stonehand", "Lightfoot", "Grimfang", "Darkwood", "Brightblade", "Thorn",
        "Wintermute", "Sunstone", "Dreamweaver", "Soulbinder", "Lorekeeper", "Cloudstrider", "Riverflow", "Aegis", "Celeste", "Drift", "MysticMoon","Dragonfire","ElvenStar","MythicQuest","MagicMuse","SorcererSky","LuminousDream","CelestialPath","Starweaver","ArcaneAura","WizardWord","DivineSpark","ShamanSoul","EclipsePower","CrystalBall","TarotTruth","PentagramPulse","FairyRealm","SpellBound","GhostWhisper","MysticMantra","ZenMaster","PyroMagic","HydroHealer","EarthEnchantress","AirApex","SoulJourney","SpiritGuide","CosmicQuest","AstroAlchemy","StellarForce","LunaLux","SolarFlare","MythicForge","Dreamwalker","EtherEcho","SacredSpace","RitualRhythm","MysticMind","AuraLeap","Spellcaster","GothicGoddess","MoonlitMaven","StarlightSage","FairyQueen","Enchanted","Mythril","AuroraAxel"," dreamcatcher","Mythweaver","NexusKnight","PhantomFox","Shadowdancer","ValkyrieVixen","WarlockWyrm","XenonXerxes","Yggdrasil","Zephyrine","AmuletAura","BladeBard","Cryssalys","DruidDwyn","EmberElf","Frostfang","GlimmerGnome","HalcyonHero","Inexorable","Jademist","Kylorian","LysanderLore","Moonwhisper","Nexarion","OnyxOracle","PegasusPilot","Quintessential","RubyRanger","SapphireSentinel","TitaniumTalon","UmbraVixen","VioletVindicator","WystanWizard","XylophiaXenon","Yellowstar","ZodiacZephyr","Aethereia","Blazeguard","Celestian","Darksong","EtherealEcho","Fierygold","GlowingGnome","HallowedHero","IvoryIllusion","JasperJolt","KarenKnight","Lemerlina","MaelstromMagic","Nebulon","OpalineOracle","PeridotPhoenix","QuicksilverQuest","RainbowRogue","SpectralSage","Thunderbolt","UnicornUprising","VaporVellum","WantedWizard","XenoliteXylophone","Yellowhammer","ZephyrZodiac","ApocalypseAce","BlazingBandit","CelestialCatcher","DazzlingDash","EclipseEdge","FuriousFox","GlacialGamer","HallowedHavoc","IcyIcon","JadedJester","KickedKiller","LuminousLord"
    ],
    tech: [
        "Byte", "Pixel", "Synth", "Circuit", "Quantum", "Nexus", "Matrix", "Aether", "Binary", "Cyber",
        "Data", "Digital", "Echo", "Giga", "Hex", "Innova", "Logic", "Meta", "Neural", "Optic",
        "Protocol", "Quasar", "Robot", "Silicon", "Tera", "Unit", "Voxel", "Wired", "Xenon", "Yotta", "CyberSentinel","TechTitan","DigitalDawn","CodeCraft","ByteBoss","PixelPwnz","GlitchGamer","VirtualVortex","DataDynamo","SystemSage","NetworkNexus","FirewallFox","CyberWolf","TechnoTrooper","DigitalDude","CodeNinja","BinaryBolt","TechMaven","GigaGamer","HyperHavoc","CircuitCatcher","MotherboardMaven","SiliconSage","RoboRogue","CyberCitadel","TechStorm","DigitalDreamer","CodeWizard","ByteBandit","PixelPirate","GlitchGladiator","VirtualVictor","DataDominator","SystemSorcerer","NetworkNinja","FirewallFreak","CyberCosmos","TechnoTycoon","DigitalDynamo","CodeCrusher","BinaryBrigade","TechMaster","GigaGlitch","HyperHyperion","CircuitChampion","MotherboardMaster","SiliconSlayer","RoboRampage","CyberCatalyst","TechTornado","DigitalDreadnought","CodeCobra","ByteBlazer","PixelPwnzer","GlitchGenius","VirtualVindicator","DataDragon","SystemSentry","NetworkNomad","FirewallFanatic","CyberChampion","TechnoThrone","DigitalDictator","CodeCommander","BinaryBrawler","TechMagnate","GigaGod","HyperHero","CircuitCatcher","MotherboardMagnus","SiliconSupreme","RoboRacer","CyberKing","TechQueen","DigitalDynasty","CodeCraftsman","ByteBrute","PixelPerfect","GlitchGuru","VirtualVoyager","DataDazzler","SystemSynergy","NetworkNavigator","FirewallFighter","CyberSentry","TechPioneer","DigitalDesigner","CodeConqueror","BinaryBlitz","TechMavenPro","GigaGigabyte","HyperHost","CircuitChampion","MotherboardMaestro","SiliconScholar","RoboRenegade","Cyber Crusader","TechTitanium","DigitalDreamweaver","CodeCrypter","ByteBrawler","PixelProphet","GlitchGamester","VirtualVulture","DataDemon","SystemSavant","NetworkNexar","FirewallFusion","CyberCore","TechnoTrinity","DigitalDilemma","CodeCipher","BinaryBeacon","TechMagnificent"
    ],
    abstract: [
        "MindMaze","IdeaSpark","DreamCatch","ThoughtFlux","ConceptX","Visionary","Innovate","AbstractArt","PixelPulse","CodeCraft","LogicLoop","NovaNiche","SpectrumShift","BlurEffect","Momentum","SynergySpark","WaveForm","FrequencyFusion","EchoChamber","InfinityLoop","NexusPoint","QuantumLeap","MatrixMind","PhaseShift","SignalFlow","CyberCore","DataStream","PulseRate","FlowState","ThetaWave","AuroraAxis","PrimeDirective","SphereZone","AxisBold","MomentumWave","FluxMaster","PatternPlay","GlowZone","InsightInc","RhythmZone","UnityNode","SphereSync","SignalSurge","CoreFusion","LoopLogic","NovaCore","EnergyPulse","MindFlow","Conceptual","MindMaze","IdeaSpark","DreamCatch","ThoughtFlux","ConceptX","Visionary","Innovate","AbstractArt","PixelPulse","CodeCraft","LogicLoop","NovaNiche","SpectrumShift","BlurEffect","Momentum","SynergySpark","WaveForm","FrequencyFusion","EchoChamber","InfinityLoop","NexusPoint","QuantumLeap","MatrixMind","PhaseShift","SignalFlow","CyberCore","DataStream","PulseRate","FlowState","ThetaWave","AuroraAxis","PrimeDirective","SphereZone","AxisBold","MomentumWave","FluxMaster","PatternPlay","GlowZone","InsightInc","RhythmZone","UnityNode","SphereSync","SignalSurge","CoreFusion","LoopLogic","NovaCore","EnergyPulse","MindFlow","Conceptual","AuroraBloom","LuminousLexicon","NexusNexar","OmegaOrbit","PulsePoint","QuasarQuest","RhythmRogue","SpectrumSage","ThetaTrooper","UnityUplink","VortexVision","WaveformWizard","XenonXylophone","YellowstarYonder","ZenithZone","AlphaAxiom","BionicBlueprint","CyberneticCatalyst","Dimensional Drift","EchoEpoch","FractalFusion","GammaGauge","HypersonicHorizon","InfinityIndex","Jolt Junction","KinematicKaleidoscope","LuminousLoop","MatrixMaven","NebulaNavigator","OmegaOverride","PsiPulse","QuBitQuest","RazorRipple","SpectrumSurge","TauTangent","UltraViolet","VectorVortex","WavelengthWizard","XenonXero","YellowstoneYoga","ZetaZone","Axiom Apex","BlazingBrink","CelestialCynosure","DawnDimensional","EchoEternity","FluxFountain","GloomGnostic","HavenHologram","IridescentInsight","Jasper Junction"
    ],
    mystic: [
        "MysticMoon","AuraShield","SpiritWolf","Enchanted","MythicQuest","MagicMuse","SorcererSky","LuminousDream","CelestialPath","Starweaver","MysticFrost","ArcaneAura","WizardWord","DivineSpark","ShamanSoul","EclipsePower","CrystalBall","TarotTruth","PentagramPulse","MoonPhase","OracleOwl","FairyRealm","SpellBound","GhostWhisper","MysticMantra","ZenMaster","KysticKraft","PyroMagic","HydroHealer","EarthEnchantress","AirApex","FireFlux","WaterWellspring","SoulJourney","SpiritGuide","MysticMeditate","CosmicQuest","AstroAlchemy","StellarForce","LunaLux","SolarFlare","MythicForge","Dreamwalker","EtherEcho","SacredSpace","RitualRhythm","MysticMind","AuraLeap","Spellcaster", "MysticMoon","AuraShield","SpiritWolf","Enchanted","MythicQuest","MagicMuse","SorcererSky","LuminousDream","CelestialPath","Starweaver","MysticFrost","ArcaneAura","WizardWord","DivineSpark","ShamanSoul","EclipsePower","CrystalBall","TarotTruth","PentagramPulse","MoonPhase","OracleOwl","FairyRealm","SpellBound","GhostWhisper","MysticMantra","ZenMaster","KysticKraft","PyroMagic","HydroHealer","EarthEnchantress","AirApex","SoulJourney","SpiritGuide","MysticMeditate","CosmicQuest","AstroAlchemy","StellarForce","LunaLux","SolarFlare","MythicForge","Dreamwalker","EtherEcho","SacredSpace","RitualRhythm","MysticMind","AuraLeap","Spellcaster","GothicGoddess","MoonlitMaven","StarlightSage","FairyQueen","EnchantedDream","MysticVoyage","ArcaneAce","Wizardry","DivineDawn","ShamanicSoul","EclipseEmber","CrystalColossus","TarotTactician","PentagramProphet","MysticMoonbeam","OracleOasis","FairyFission","SpellSeeker","GhostGlitter","MysticMirage","ZenZone","KysticKulture","PyroPeak","HydroHaven","EarthEnergy","AirAura","SoulSpark","SpiritStorm","CosmicCore","AstroArrow","StellarSpectrum","LunaLove","SolarSavior","MythicMaven","Dreamquest","EtherElysium","SacredSage","RitualRealm","MysticMaster","AuraAuthority","Spell Sage","GothicGlow","MoonlitMajesty","StarlightSurge","FairyForce","EnchantedEcho","MysticMomentum","ArcaneAbyss","WizardWry","DivineDusk","ShamanSheild","EclipseEmber","CrystalColossus","TarotTactician","PentagramProphet","MysticMoonbeam","OracleOasis","FairyFission","SpellSeeker","GhostGlitter","MysticMuse","ZenZephyr","KysticKnight","PyroPhoenix","HydroHarmony"
    ],
    ancient: [
        "AncientOne","VintageVibe","TimelessTruth","OldSoul","AntiqueAce","HistoricHero","ClassicCode","LegendaryLion","MythicMage","ArchetypeAce","VenerableVault","AncientWife","PrimevalPack","RusticRoot","HeritageHold","LegacyLord","EpochEcho","EraEnd","BronzeBolt","IronIcon","SteelSavage","GoldenGrail","SilverSaga","JadeJester","EmeraldEmpire","RubyRenaissance","SapphireSage","AmberApex","CobaltCipher","MarbleMaze","GraniteGoddess","StoneSage","RockRoot","BoulderBoss","MonolithMan","ArtifactAce","ChronicleChief","DynastyDude","EmpireEcho","KingdomKeeper","ThroneTracer","CrownChief","ScepterSage","OracleOrigin","FossilFuel","RelicRealm","TimelessTactician","AgeOldAce","HeritageHero", "AncientOne","VintageVibe","TimelessTruth","OldSoul","AntiqueAce","HistoricHero","ClassicCode","LegendaryLion","MythicMage","ArchetypeAce","VenerableVault","AncientWife","PrimevalPack","RusticRoot","HeritageHold","LegacyLord","EpochEcho","EraEnd","BronzeBolt","IronIcon","SteelSavage","GoldenGrail","SilverSaga","JadeJester","EmeraldEmpire","RubyRenaissance","SapphireSage","AmberApex","CobaltCipher","MarbleMaze","GraniteGoddess","StoneSage","RockRoot","BoulderBoss","MonolithMan","ArtifactAce","ChronicleChief","DynastyDude","EmpireEcho","KingdomKeeper","ThroneTactician","CrownCatalyst","ScepterSage","OracleOverseer","FossilForge","RelicRaider","TimelessTemplar","AgeOldAlchemist","HeritageHarbinger","VintageVindicator","ClassicChampion","LegendaryLuminari","MythicMaestro","ArchetypeArchitect","VenerableVizier","AncientAce"
    ],
    cute: [
        "SweetPeachy","LovelyLuna","CuteCookie","FluffyPanda","SugarGlide","HoneyBunny","PetalPunk","BubblesGirl","ChocoLava","CinnamonRoll","AngelWings","SunshineSmile","FuzzyWuzzy","Lovebomb","KawaiiKitty","MiniMochi","RosePetal","Buttercup","CakePop","MellowMush","Sparkles101","GlitterGaze","FairyDust","LovelyLucy","SweetSerenity","CuteCrush","SugarSensations","PookiePie","SmileyFace","HeartThrob","LovelyLlama","CuteCommander","FuzzyFurry","BunnyBoo","KittyKat","PuppyLove","SweetSweetie","SugarShack","Lovestruck","FlowerPower","CuteCrasher","MahMahMeow","SunnySmiles", "Sweetpea","LovelyLuna","CuteCrush","HoneyBunny","FluffyFavor","SugarSweet","AngelWings","KawaiiKlove","MellowMuse","SparklesHeart","GlitterGaze","FairyDustLove","LovelyLucy","SweetSurprise","HeartMelody","LovePotion","SugarCookie","CinnamonLove","WarmHug","CozyCompanion","TenderTouch","KindredSpirit","LoveBreeze","SweetSurrender","HeartString","LovelyLyric","FlowerPowerLove","HoneyHoney","SweetpeaSpecial","LoveNotes","HeartfeltHaven","SugarShelter","Lovecastle","WarmWish","HeartWhisper","LoveSpark","SweetSentiment","CuteCompanion","Lovebirds","HeartOfGold","SugarRay","LoveMaven","WarmthWinner","HeartKeeper","LovelyLlama","SweetSeraph","LoveLegend","HeartthrobHero","SugarSensations","Lovewave","WarmWelcome","HeartHelper","LoveBangle","SweetSquad","CuteCourier","LovePetal","HeartSong","SugarGlideLove","LovelyLyrics","WarmWrap","HeartHaven","LoveHearts","SweetSurvivor","CuteChampion","LoveBuzz","WarmWorthy","HeartHopeful","SugarShield","LovelyLighthouse","HeartHero","LoveBurst","SweetSupport","WarmWise","HeartHarmony","LoveLink","SugarSmile","CuteCelebration","LovelyLaugh","WarmWishbone","Pookie","BooBoo","SweetiePie","Munchkin","LoveyDovey","Cuddles","Snugglebug","Fuffi","PumpkinPie","Marshmallow","Snickers","ToffeeTina","CupcakeCute","BubblegumBabe","CottonCandy","LollipopLove","PeachyKeen","SunshineSmile","RainbowRidge","ButtercupBloom","DaisyDream","LuckyCharm","CherryBlossom","MeadowMist","FlowerPower","RosyRouge","LavenderLove","SunflowerSweet","TulipTango","VioletVoodoo","PoppyPetal","IrisInsight","LilyLove","CarnationCute","OrchidOoh","JasmineJoy","RoseRay","GardenGnomeSweet","HoneybeeHive","Butterfly Bliss","KittyKat","PuppyLove","BunnyBoo","KoalaKute","PenguinPal","SquirrelSweet","HamsterHaven","FishyFriend","BirdieBoo","TurtleTina","FoxieFavor","DeerDoodles","Ribbon cute"
    ],
    food: [
        "FoodieFanatic","TastyTitan","SnackAttack","GourmetGaze","ChefMaster","FoodComa","SweetTooth","PizzaPunk","BurgerBoss","TacoTitan","SushiSavage","CoffeeCraze","DonutDude","CakeKing","PiePirate","BBQBandit","MeatMaven","VeggieVibes","FruitFan","SnackSquad","ChocoChampion","IceCreamIcon","FoodFreak","RestaurantRogue","CafeCatcher","DiningDude","GulfGourmet","CuisineKing","FlavorFusion","FoodJunkie","SpiceSage","SaucySquad","SugarSensations","MunchieMaven","FeastFanatic","DishDash","KitchenKing","RecipeRenaissance","FoodFusion","GourmetGoddess","PalatePunk","SnackStorm","EdibleAce","FoodFantasy","BiteBoss","TasteTitans","CulinaryCrew","FoodStorm","GulfGlutton", "SweetTooth","FoodieFanatic","GourmetGaze","CuisineKing","ChefCharm","TastyTango","DeliciousDash","FlavorFusion","SavorySquad","BiteBoss","SnackAttack","MealMaster","DiningDude","RestaurantRogue","CafeCatcher","KitchenKrew","BakeryBoss","PastryPunk","SugarSurge","CaveChef","FoodComa","GulfGourmet","SavorSquad","TasteTitans","UmamiUnicorn","VitaminVibes","NutriNation","ProteinPride","CarbCrew","FiberFanatic","GlutenGuru","KetchupKing","SaucySage","SpiceSquad","HerbHive","BasilBrawler","MintMaven","CinnamonSage","GarlicGaze","OnionOgre","PepperPwnz","CocoaCatcher","CoffeeConnoisseur","TeaTitan","JuiceJester"," SodaSavant","WaterWizard","BBQBrigade","GrillGenius","FrostyFusion","IceCreamIcon","CakeCrusher","PiePirate","DonutDominator","ChocolateChampion","VanillaVortex","StrawberrySage","BlueberryBoss","RaspberryRogue","LemonLizard","OrangeOasis","MangoMaven","PineapplePwnz","WatermelonWizard","HoneyHero","SugarSensations","CerealKiller","BreakfastBrawler","LunchLord","DinnerDude","SupperSage","AppetiteAce","HungerHero","ThirstyTitan","FeastFanatic","BanquetBoss","BuffetBrigade","GingerGaze","TurmericTitan","CucumberCatcher","CarrotCrew","BroccoliBoss","CauliflowerCave","PotatoPunk","TomatoTitan","CornCrew","PeanutPwnz","AlmondAce","WalnutWizard","PecanPirate","CookieCrusher","BrownieBrigade","MuffinMaven"
    ],
    street: [
        "StreetKing","UrbanAce","CitySlick","PavementPunk","RoadRunner","HighwayHero","SidewalkSage","CornerCrew","BlockParty","StreetSmart","UrbanLegend","CityBoy","TownTrend","MetroMaven","BoulevardBoss","AvenueAce","LaneLeader","CrosswalkCatcher","JunctionJester","StreetStyle","UrbanUprise","CityChamp","PaveMaster","RoadRogue","StreetSurgeon","GhettoGenius","Urbanite","ConcreteCowboy","AsphaltAce","StreetPhantom","CityLights","NightOwlStreet","MainStreetMaven","StreetCred","UrbanVibes","RoadTripper","StreetSoldier","CityScene","TownTalk","StreetLevel","UrbanUpstart","BoulevardBandit","StreetSavvy","PavementPro","CitySquad","RoadRash","StreetStory","UrbanUnderground","CityPulse", "StreetKing","UrbanUprise","CitySlick","PavementPete","RoadRunner","HighwayHero","BoulevardBoss","AvenueAce","LaneLegend","DrivewayDude","CrosswalkCrew","IntersectionIcon","JunctionJester","CornerstoneCatcher","AlleyAce","PathfinderPete","TrailblazerTroy","AsphaltAce","ConcreteCrew","CobblestoneCatcher","BrickBrawler","SidewalkSage","CurbsideCrew","TrafficTitan","RavenousRampart","StreetwiseSquad","UrbanUnderground","CityCentreCrew","DowntownDominator","UptownUnicorn","SuburbanSage","RuralRenegade","HighwayHavoc","RoadRogue","BoulevardBrawler","AvenueAssault","LaneLazarus","DrivewayDynamo","CrosswalkCatalyst","IntersectionInsider","JunctionImpact","CornerstoneCrusher","AlleywayAce","PathwayPioneer","TrailbreakerTitus","AsphaltApache","ConcreteCouture","CobblestoneCatcher","BrickByBrick","SidewalkSentinel","CurbsideCourier","TrafficTactician","StreetSmartSquad","UrbanUmbrella","CityCentreChampion","DowntownDynamite","UptownUnstoppable","SuburbanSprint","RuralRush","HighwayHurricane","RoadRacer","BoulevardBlaze","AvenueAvalanche","LaneLynx","DrivewayDash","CrosswalkCrossover","IntersectionImpact","JunctionJolt","CornerstoneCharge","AlleywayAction","PathwayPursuit","TrailblazerTroop","AsphaltArmy","ConcreteCharge","CobblestoneCrew","BrickBreaker","SidewalkSprint","CurbsideCute","TrafficTorrent","StreetStorm","UrbanUproar","CityFrenzy","DowntownDash","UptownUmbrella","SuburbanSurge","RuralRoute","HighwayHype","RoadRhythm","BoulevardBounce","AvenueAura","LaneLife","DrivewayDynamism","CrosswalkCulture"
    ],
    Music: [
        "Aria ", "Cadence ", "Melody ", "Harmony ", "Rhythm ", "Symphony ", "Tune ", "Lyric ", "Verse ", "Chord ", "Scale ", "Octave ", "Sonata ", "Rhapsody ", "Ballad ", "Anthem ", "Chorus ", "Tempo ", "Beat ", "Muse ", "Maestro ", "Composer ", "Virtuoso ", "Crescendo ", "Diminuendo ", "Pianissimo ", "Fortissimo ", "Allegro ", "Andante ", "Presto ", "Soprano ", "Alto ", "Tenor ", "Bass ", "Baritone ", "Mezzo ", "Countertenor ", "Falsetto ", "Vibrato ", "Resonance ", "Clef ", "Stanza ", "Concert ", "Overture ", "Interlude ", "Finale ", "Encore ", "Acapella ", "Orchestra ", "Band ", "Choir ", "Chorus ", "Ensemble ", "Soloist ", "Conductor ", "Producer ", "DiscJockey ", "MixMaster ", "Soundwave ", "Acoustic ", "Electric ", "Fret ", "String ", "Percussion ", "Brass ", "Woodwind ", "Keyboard ", "Synthesizer ", "Sampler ", "DrumBeat ", "Guitarist ", "Pianist ", "Violinist ", "Cellist ", "Flutist ", "Trumpeter ", "Saxophonist ", "Drummer ", "Vocalist ", "Songwriter ", "PopStar ", "Rockstar ", "JazzCat ", "Bluesman ", "Classicalist ", "HipHop ", "RhythmKing ", "SoulSinger ", "Funkateer ", "DiscoDiva ", "TechnoTune ", "HouseBeat ", "TranceVibe ", "Dubstep ", "Ambient ", "Folklore ", "CountryTune ", "ReggaeRhythm ", "SkaPulse ", "GospelGrace ", "MelodicMind ", "HarmonyHeart ", "RhythmSoul ", "BeatMaster ", "SymphonyStar ", "TuneTitan ", "LyricLegend ", "VerseVibe ", "ChordChampion ", "ScaleSensation ", "OctaveOvation ", "SonataSavvy ", "RhapsodyRouge ", "BalladBuzz ", "AnthemAce ", "ChorusChief ", "TempoTaurus ", "BeatBoss ", "MuseMaven ", "MaestroMagnus ", "ComposerCrown ", "VirtuosoVibe ", "CrescendoKing ", "DiminuendoDiva ", "PianissimoPro ", "FortissimoFreak ", "AllegroAce ", "AndanteArtist ", "PrestoProdigy ", "SopranoSensation ", "AltoAce ", "TenorTitan ", "BassBoss ", "BaritoneBrilliance ", "MezzoMaven ", "CountertenorCrown ", "FalsettoFreak ", "VibratoVibe ", "ResonanceRogue ", "ClefChampion ", "StanzaStar ", "ConcertCzar ", "OvertureOvation ", "InterludeIcon ", "FinaleFuego ", "EncoreEnigma ", "AcapellaAce ", "OrchestraOmnipotent ", "BandBoss" 
    ],
    Sport: [
        "Ace", "Blitz", "Champ", "Dash", "Eagle", "Falcon", "Glider", "Hawk", "Javelin", "Kicker",
        "Leap", "Maverick", "Netter", "Olympian", "Pacer", "Quiver", "Racer", "Striker", "Titan", "Victor",
        "Winner", "Xtreme", "Yankee", "Zealot", "Arrow", "Bat", "Baller", "Bowman", "Catcher", "Driver",
        "Fielder", "Golfer", "Hitter", "Jumper", "Keeper", "Pitcher", "Runner", "Scorer", "Swimmer", "Thrower",
        "Spiker", "Volley", "Goalie", "Skipper", "Rider", "Skater", "Surfer", "Climber", "Hiker", "Trekker",
        "Sprint", "Marathon", "Triathlon", "Decathlon", "Pentathlon", "Relay", "Shuttle", "Agility", "Endure", "Force",
        "Power", "Speed", "Strength", "Agile", "Dynamic", "Fleet", "Nimble", "Robust", "Swift", "Vigour",
        "Athlete", "Coach", "Referee", "Captain", "MVP", "AllStar", "Legend", "Phenom", "Prodigy", "Rookie",
        "Champion", "Contender", "Gladiator", "Spartan", "Warrior", "Knight", "Hunter", "Guardian", "Pioneer", "Pathfinder",
        "Blaze", "Comet", "Cyclone", "Gale", "Hurricane", "Monsoon", "Thunder", "Tornado", "Vortex", "Whirlwind"
    ],
    Travel: [
        "Voyager", "Explorer", "Wanderer", "Nomad", "Globetrotter", "Pilgrim", "Journeyman", "Pathfinder", "Adventurer", "Roamer",
        "Navigator", "Sailor", "Pilot", "Backpacker", "Tourist", "Excursionist", "Wayfarer", "Odyssey", "Expedition", "Safari",
        "Quest", "Pilgrimage", "Cruise", "Tour", "Flight", "Journey", "Tripster", "RoadRunner", "Trailblazer", "Horizon",
        "Zenith", "Summit", "Vista", "Viewfinder", "Compass", "Mapmaker", "Latitude", "Longitude", "Meridian", "Waypoint",
        "Passport", "Jetsetter", "Worldwise", "CultureSeeker", "Locale", "Destination", "Frontier", "Outback", "Wilderness", "Highlander",
        "Urbanite", "Cosmopolitan", "Continental", "Islander", "DesertRose", "MountainPeak", "Riverbend", "OceanDeep", "ForestFern", "SkyWalker",
        "StarGazer", "SunChaser", "Moonlighter", "DawnBreaker", "TwilightTrek", "Aurora", "EchoPoint", "Gateway", "Threshold", "Passage",
        "Transit", "Vector", "Altitude", "AltitudeAce", "Groundhog", "Seafarer", "Skybound", "EarthBound", "GlobeTrot", "PioneerPath",
        "Discovery", "Revelation", "Insight", "Perspective", "Experience", "Memories", "Souvenir", "Photographer", "Storyteller", "Dreamweaver",
        "FreeSpirit", "OpenRoad", "NewBeginnings", "Homeward", "Afar", "Beyond", "Faraway", "Distant", "Across", "Abroad"
    ],
    Business: [
        "Apex", "Summit", "Venture", "Catalyst", "Innovate", "Strategist", "Synergy", "Acumen", "Capital", "Enterprise",
        "Executive", "Forefront", "Growth", "Harvest", "Impact", "Insight", "Momentum", "Nexus", "Optima", "Pinnacle",
        "Prosper", "Quantum", "Resolve", "Stellar", "Thrive", "Uplift", "Vanguard", "Wealth", "Zenith", "Anchor",
        "Blueprint", "Cornerstone", "Framework", "Foundation", "Keystone", "Lighthouse", "Mainstay", "Pillar", "Stronghold", "TerraFirma",
        "Advantage", "Edge", "Expert", "Maestro", "Mastermind", "Navigator", "Oracle", "Pacesetter", "Pathfinder", "Visionary",
        "Broker", "Dealer", "Factor", "Guilder", "Merchant", "Operator", "Partner", "Trader", "Agent", "Advisor",
        "Analyst", "Consultant", "Director", "Manager", "Principal", "Specialist", "Administrator", "Coordinator", "Facilitator", "Mediator",
        "Brandmark", "Dynasty", "Empire", "Fortune", "Legacy", "Monarch", "Reign", "Sovereign", "Dominus", "Kingpin",
        "Frontier", "Global", "Interlink", "Meridian", "Oasis", "Pacific", "Quadrant", "Sphere", "Transcend", "Unity",
        "Accord", "Alliance", "Concord", "Harmony", "Integrity", "Kindred", "Midas", "Prosperity", "Success", "Value"
    ],
    Science: [
        "Atom", "Quantum", "Nucleus", "Photon", "Electron", "Proton", "Neutron", "Molecule", "Element", "Isotope",
        "Plasma", "Quark", "Ion", "Catalyst", "Enzyme", "Genome", "Neuron", "Synapse", "Dendrite", "Axon",
        "Apex", "Zenith", "Orbit", "Beacon", "Nexus", "Portal", "Catalyst", "Formula", "Theorem", "Hypothesis",
        "Calculus", "Algebra", "Geometry", "Algorithm", "Binary", "Data", "Logic", "Circuit", "Sensor", "Probe",
        "Spectra", "Luminus", "Echo", "Vector", "Flux", "Current", "Voltage", "Kinetic", "Static", "Dynamic",
        "Inquiry", "Discover", "Insight", "Observe", "Analyze", "Synthesize", "Innovate", "Formulate", "Predict", "Theorize",
        "Genius", "Sage", "Intellect", "Savvy", "Pioneer", "Explorer", "Luminary", "Pathfinder", "Visionary", "Scientist",
        "Biotech", "Nanotech", "Neurotech", "Cybernetics", "Robotics", "Astronomy", "Geology", "Physics", "Chemistry", "Biology",
        "Cosmos", "Galaxy", "Nebula", "Star", "Planet", "Comet", "Asteroid", "Meteor", "Supernova", "BlackHole",
        "Fusion", "Fission", "Gravity", "Relativity", "Momentum", "Inertia", "Velocity", "Frequency", "Amplitude", "Wavelength"
    ],
    Art: [
        "Palette", "Canvas", "Brushstroke", "Easel", "Sculptor", "Painter", "Sketch", "Muse", "Aura", "Ink",
        "Charcoal", "Clay", "Mosaic", "Stipple", "Hue", "Chroma", "Luminance", "Shade", "Tint", "Tone",
        "Verve", "Vibrant", "Impression", "Expression", "Abstract", "Figurative", "Surreal", "Cubist", "Modernist", "Classical",
        "Renaissance", "Baroque", "Rococo", "Gothic", "ArtNouveau", "ArtDeco", "PopArt", "OpArt", "Minimalist", "Conceptual",
        "Draftsman", "Illustrator", "Designer", "Animator", "Curator", "Gallerist", "Collector", "Patron", "Aesthetic", "Form",
        "Composition", "Texture", "Perspective", "Symmetry", "Asymmetry", "Harmony", "Contrast", "Rhythm", "Movement", "Balance",
        "Vision", "Creativity", "Imagination", "Inspiration", "Genius", "Masterpiece", "Original", "Unique", "Craft", "Skill",
        "Atelier", "Studio", "Gallery", "Exhibition", "Collection", "Showcase", "Exhibit", "Fresco", "Mural", "Tapestry",
        "Etching", "Printmaker", "Lithograph", "Calligraphy", "Calligrapher", "Poet", "Poetry", "Verse", "Prose", "Storyteller",
        "Melody", "Harmony", "Symphony", "Choreographer", "Dancer", "Performer", "Drama", "Tragedy", "Comedy", "Actor"
    ],
    History: [
        "Chronicle", "Epoch", "Era", "Legacy", "Lore", "Mythos", "Relic", "Saga", "Scroll", "Tale",
        "Ancient", "Antiquity", "Bygone", "Classic", "Elder", "Forebear", "Heritage", "Historic", "Olden", "Past",
        "Pioneer", "Ancestry", "Lineage", "Dynasty", "Empire", "Kingdom", "Reign", "Sovereign", "Monarch", "Pharaoh",
        "Emperor", "Queen", "King", "Lord", "Lady", "Knight", "Templar", "Crusader", "Gladiator", "Spartan",
        "Centurion", "Legion", "Cohort", "Tribe", "Clan", "Nomad", "Settler", "Explorer", "Discoverer", "Conqueror",
        "Architect", "Builder", "Foundry", "Pillar", "Root", "Seed", "Source", "Origin", "Dawn", "Genesis",
        "Moment", "Event", "TurningPoint", "Milestone", "Chapter", "Volume", "Annals", "Archives", "Script", "Parchment",
        "Codex", "Artifact", "Fragment", "Ruin", "Vestige", "Echo", "Whisper", "Spirit", "Ghost", "Shade",
        "Oracle", "Prophet", "Seer", "Visionary", "Ancestor", "Descendant", "Heirloom", "Remnant", "Survivor", "Witness",
        "Truth", "Wisdom", "Knowledge", "Scholar", "Historian", "Chronicler", "Scribe", "Keeper", "Sentinel", "Guardian"
    ],
    god: [
        "Zeus", "Odin", "Ra", "Anubis", "Loki", "Apollo", "Athena", "Thor", "Isis", "Horus",
        "Poseidon", "Hades", "Hera", "Aphrodite", "Ares", "Hermes", "Artemis", "Dionysus", "Hestia", "Demeter",
        "Brahma", "Vishnu", "Shiva", "Indra", "Agni", "Surya", "Varuna", "Saraswati", "Lakshmi", "Parvati",
        "Amun", "Thoth", "Osiris", "Set", "Bastet", "Nut", "Geb", "Shu", "Tefnut", "Ptah",
        "Wukong", "Nuwa", "Fuxi", "Houyi", "Chang'e", "YanWang", "GuanYu", "Mazu", "JadeEmperor", "LongWang",
        "Quetzalcoatl", "Tezcatlipoca", "Huitzilopochtli", "Tlaloc", "Chicomecoatl", "XipeTotec", "Coatlicue", "Mictlantecuhtli", "Coyote", "SunGod",
        "MoonGod", "SkyFather", "EarthMother", "Thunderer", "StormBringer", "LightBringer", "DarkLord", "Trickster", "Healer", "Protector",
        "Creator", "Destroyer", "LifeGiver", "DeathDealer", "WarGod", "LoveGoddess", "HarvestLord", "OceanKing", "ForestSpirit", "MountainGiant",
        "RiverFlow", "WindRider", "Sunstone", "Moonshard", "StarWeaver", "DawnWhisper", "TwilightShadow", "CrimsonLord", "AzureSprite", "Veridian",
        "IronWill", "SilverTongue", "GoldenHeart", "StoneFist", "ShadowGazer", "MistWalker", "FlameBorn", "IceVein", "DreamSinger", "FateWeaver"
    ],
    Warrior: [
        "Blade", "Mauler", "Striker", "Sentinel", "Vanguard", "Warden", "Conqueror", "Gladiator", "Spartan", "Berserker",
        "Paladin", "Knight", "Ronin", "Samurai", "Viking", "Warlord", "Marshal", "Commander", "General", "Captain",
        "Champion", "Hero", "Legend", "Veteran", "Elite", "Guardian", "Protector", "Slayer", "Destroyer", "Crusher",
        "Reaper", "Shadow", "Ghost", "Phantom", "Specter", "Dreadnought", "Ironhide", "Steelheart", "Stonefist", "Thunderclap",
        "Stormbreaker", "Firebrand", "Icevein", "Bloodfang", "Nightblade", "Sunpiercer", "Moonshard", "Starforged", "Spiritwalker", "Beastlord",   "Dragonheart", "Wolfsbane", "Lionmane", "Bearclaw", "Falconeye", "Hawkwind", "Eaglefang", "Tigerstrike", "Serpentcoil", "Venomtusk",
        "Rage", "Fury", "Valor", "Courage", "Fortitude", "Grit", "Mettle", "Resolve", "Steadfast", "Unbroken",
        "Armiger", "Brigand", "Cutthroat", "Duelist", "Enforcer", "Executioner", "Fighter", "Guard", "Juggernaut", "Marauder",
        "Punisher", "Ravager", "Scourge", "Shaman", "Skirmisher", "Swordsman", "Axeman", "Spearman", "Archer", "Marksman",
        "Pikeman", "Shieldbearer", "Scout", "Pathfinder", "Outrider", "Raider", "Vigilant", "Zealot", "Grimblade", "Aegis"
    ],
    Superhero: [
        "CaptainValor", "IronAegis", "StarKnight", "CrimsonBolt", "ShadowWing", "Vortex", "QuantumLeap", "Blaze", "Nova", "Guardian",
        "Sentinel", "Vigilante", "Protector", "Savior", "Champion", "Justice", "Liberty", "Freedom", "Unity", "Invictus",
        "Spectre", "Phoenix", "Titan", "Olympus", "Astral", "Celestial", "Cosmic", "Galactic", "Stellar", "Lunar",
        "Solar", "Thunder", "Storm", "Cyclone", "Avalanche", "Blizzard", "Quake", "Volcano", "Wildfire", "Tsunami",
        "Speedster", "Telepath", "Telekinetic", "Infiltrator", "Shapeshifter", "Illusionist", "Healer", "Techno", "Cyberspace", "Biohazard",
        "AtomSmasher", "Magneto", "Gravity", "Sonic", "Lightwave", "Darkmatter", "Pulse", "Vibration", "Energy", "Forcefield",
        "Mindbender", "Dreamwalker", "Oracle", "Seer", "Prophet", "Mythic", "Legendary", "Wonderman", "Miracle", "Prodigy",
        "Dynamo", "Turbo", "Viper", "Ghost", "Hunter", "Arrow", "Blade", "Hammer", "Shield", "Torch",
        "Comet", "Rocket", "Meteor", "Aura", "Spark", "Flash", "Glimmer", "Radiant", "Shine", "Brilliant",
        "Vixen", "Amazon", "WarriorPrincess", "LadyJustice", "MightyMaiden", "PowerGirl", "SheForce", "Heroine", "WonderWoman", "SuperGirl"
    ],
    Villain: [
        "Malice", "Dread", "Grimfang", "ShadowBlight", "VortexLord", "Oblivion", "Anarchy", "Chaos", "Havoc", "Fury",
        "Pestilence", "Ruin", "Scourge", "Terror", "Vile", "Warlock", "Abyss", "Nightmare", "Blight", "Plague",
        "Corruptor", "Destroyer", "Executioner", "Marauder", "Predator", "Reaper", "Savage", "Tyrant", "Usurper", "Wasteland",
        "Blackheart", "Darkspawn", "Gravewalker", "Ironfist", "Stonecold", "Thunderfist", "Stormbringer", "Firestorm", "Icefang", "Bloodlust",
        "Nightshade", "Venom", "Poison", "Acid", "Toxic", "Mutant", "Monster", "Brute", "Fiend", "Demon",
        "Goblin", "Orc", "Minotaur", "Hydra", "Gorgon", "Dragon", "Wyvern", "Serpent", "Spider", "Scorpion",
        "Jester", "Madman", "Lunatic", "Psycho", "Manic", "Screamer", "Whisper", "Gloom", "Cinder", "Ember",
        "Phantom", "Ghost", "Specter", "Wraith", "Poltergeist", "Zombie", "Vampire", "Lycan", "Ghoul", "Necromancer",
        "Sorcerer", "Witchdoctor", "Enchantress", "Hexmaster", "Curseweaver", "Doomcaller", "Painbringer", "Soulstealer", "Mindflayer", "Dreamhaunt",
        "Slaughter", "Butcher", "Carnage", "Massacre", "Slasher", "Ripper", "Tormentor", "Cruel", "Evil", "Sinister"
    ],
    Space: [
        "Cosmos", "Galaxy", "Nebula", "Orion", "Andromeda", "Cassiopeia", "Celestia", "Astral", "Stellar", "Lunar",
        "Solaris", "Nova", "Supernova", "Quasar", "Pulsar", "Comet", "Asteroid", "Meteor", "Orbit", "Zenith",
        "Celestial", "Eclipse", "Horizon", "Infinity", "Lightyear", "Moonbeam", "Stardust", "Sunspot", "Twilight", "Vortex",
        "Aether", "Ether", "Void", "Abyss", "DeepSpace", "Darkmatter", "Antimatter", "Wormhole", "Singularity", "BigBang",
        "Starfire", "Moonrock", "Sunflare", "Skywatcher", "Starseeker", "Cosmonaut", "Astronaut", "Voyager", "Explorer", "Pathfinder",
        "Discovery", "Frontier", "Odyssey", "Pilgrim", "Navigator", "Orbitron", "Spacewalker", "Skyrunner", "Starflight", "Astroglide",
        "Galacticus", "Universalis", "Nebulosa", "Solara", "Lunaris", "Stella Maris", "Cosmo", "Astro", "Terra", "Novae",
        "Ecliptica", "Meridian", "Zenithal", "Polaris", "Sirius", "Vega", "Rigel", "Deneb", "Altair", "Proxima",
        "Centauri", "Arcturus", "Betelgeuse", "Antares", "Spica", "Capella", "Aldebaran", "Regulus", "Fomalhaut", "Castor",
        "Pollux", "Jupiter", "Saturn", "Mars", "Venus", "Mercury", "Neptune", "Uranus", "Pluto", "Titan"
    ],
    Automotive: [
        "Apex", "Challenger", "Velocity", "Titan", "Phantom", "Roadster", "Cruiser", "Drifter", "Pioneer", "Navigator",
        "Maverick", "Vanguard", "Blitz", "Comet", "Cyclone", "Horizon", "Mirage", "Spectra", "Spirit", "Vortex",
        "Ignite", "Racer", "Cruze", "Bolt", "Dash", "Glide", "Prowler", "Sentry", "Stallion", "Thunder",
        "Wrangler", "Charger", "ChargerPro", "Outlander", "Pathfinder", "Renegade", "Rover", "Safari", "Trailblazer", "Voyager",
        "Automata", "Mech", "Gearhead", "Turbo", "Engine", "Piston", "Axle", "Chassis", "Drive", "Power",
        "Torque", "Boost", "Nitro", "Velocity", "Accelerate", "CruiserMax", "Sportster", "GrandTourer", "RoadKing", "Highwayman",
        "Urbanite", "TownCar", "CityRunner", "Canyonero", "DesertCat", "MountainMaster", "RiverRider", "ForestTrekker", "Skyline", "ApexDrive",
        "Chrome", "Magnum", "Steel", "Ironclad", "Titanium", "Bronze", "Silver", "Golden", "Diamond", "Sapphire",
        "Mustang", "Cobra", "Jaguar", "Lionheart", "Panther", "Cougar", "Eagle", "Falcon", "Raven", "Viper",
        "Scorpion", "Rhino", "Grizzly", "Wolf", "Lynx", "Condor", "Marauder", "Outlaw", "Renegade", "Bandit"
    ],
    Aviation: [
        "Aero", "Aviator", "Pilot", "Flight", "Skyhawk", "Eagle", "Falcon", "Albatross", "Condor", "Vulture",
        "Jetstream", "Turbine", "Propeller", "Rotor", "Wingman", "Flyer", "Glide", "Soar", "Ascend", "Summit",
        "Altitude", "Stratosphere", "Aerospace", "Celestial", "Cosmos", "Galaxy", "Horizon", "Nimbus", "Skyline", "Zenith",
        "Cloudbreaker", "Skyrider", "Windwalker", "Airborne", "Liftoff", "Cruiser", "Voyager", "Explorer", "Navigator", "Pathfinder",
        "Vector", "Thrust", "Velocity", "Mach", "Sonic", "Supersonic", "Hypersonic", "Stratofire", "Skyblaze", "Jetfire",
        "Airace", "Airwolf", "Airborne", "Aircadet", "Airmarshal", "Aerodrone", "Aerodyne", "Aeronaut", "Airforce", "Airspeed",
        "BlueSky", "ClearView", "HighFlyer", "CloudNine", "Starflight", "Moonlighter", "Sunwing", "DawnFlight", "TwilightGlide", "Aurora",
        "Aeron", "Aeronautica", "Avion", "Avionics", "Glidepath", "Airwave", "Airflow", "Gust", "Zephyr", "Breeze",
        "Wingtip", "Tailwind", "Headwind", "Updraft", "Downdraft", "Windshear", "Skyward", "Uplink", "Skyport", "Hangar",
        "Runway", "Airfield", "Skybase", "FlightDeck", "Cockpit", "Pilotage", "Airman", "Avionix", "Flyby", "Overhead"
    ],
    Masculine: [
        "Ace", "Bear", "Blaze", "Blade", "Brick", "Bronx", "Bull", "Chieftain", "Colossus", "Comet",
        "Conqueror", "Cutter", "Dare", "Dash", "Diesel", "Digger", "Dragon", "Dread", "Duke", "Dynamo",
        "Eagle", "Echo", "Falcon", "Fang", "Fury", "Ghost", "Glacier", "Goliath", "Grizzly", "Hawk",
        "Hunter", "Ignite", "Iron", "Jax", "Jet", "Jolt", "Kingpin", "Knox", "Legend", "Lion",
        "Maverick", "Max", "Midnight", "Mongo", "Nitro", "Nomad", "Nova", "Onyx", "Outlaw", "Phantom",
        "Phoenix", "Piston", "Rampage", "Ranger", "Reaper", "Ridge", "Rogue", "Rocky", "Rune", "Saber",
        "Savage", "Scout", "Shadow", "Shane", "Shark", "Sharpshooter", "Slash", "Smash", "Solo", "Spartan",
        "Spike", "Steel", "Stinger", "Storm", "Striker", "Tank", "Titan", "Torch", "Tracker", "Talon",
        "Thunder", "Tiger", "Trigger", "Vandal", "Viper", "Vipera", "Volt", "Vortex", "Warden", "Wolf",
        "Wrangler", "Xero", "Zephyr", "Zeke", "Zenith", "Zodiac", "Blazer", "Crusher", "Grim", "Ragnar"
    ],
    Feminine: [
        "Aurora", "Blossom", "Celeste", "Coral", "Dahlia", "Dawn", "Echo", "Ember", "Fleur", "Glimmer",
        "Harmony", "Hazel", "Iris", "Jade", "Jasmine", "Luna", "Lavender", "Lily", "Meadow", "Mystic",
        "Nova", "Opal", "Pearl", "Petal", "Phoenix", "Pixie", "Rose", "Ruby", "Sapphire", "Seraphina",
        "Shadow", "Silver", "Sky", "Sparkle", "Star", "Stella", "Storm", "Summer", "Sunstone", "Twinkle",
        "Velvet", "Violet", "Willow", "Winter", "Wisp", "Zephyr", "Amethyst", "Aria", "Bliss", "Breeze",
        "Buttercup", "Charm", "Circe", "Crystal", "Diva", "Dreamer", "Enchantress", "Fairy", "Fauna", "Fiora",
        "Flame", "Flora", "Goddess", "Grace", "Halo", "Heavenly", "Honey", "Jewel", "Joy", "Karma",
        "Kiss", "Lace", "Lumin", "Magic", "Muse", "Nightingale", "Oracle", "Poppy", "Precious", "Queen",
        "Rainbow", "Rhapsody", "River", "Scarlet", "Siren", "Songbird", "Sorceress", "Soul", "Spirit", "Sprite",
        "Sugar", "Sweetie", "Tinker", "Treasure", "Valkyrie", "Vanilla", "Whisper", "Wildflower", "Zenith", "Zinnia"
    ],
    Weapon: [
        "Revolver", "Broadsword", "Sabre", "Katana", "Cutlass", "Rapier", "Dagger", "Stiletto", "Dirk", "Kukri",
        "Axe", "Warhammer", "Mace", "Flail", "Spear", "Lance", "Halberd", "Pike", "Glaive", "Trident",
        "Bow", "Crossbow", "Longbow", "Recurve", "Compound", "Arrow", "Quiver", "Bolt", "Dart", "Sling",
        "Cannon", "Mortar", "Ballista", "Catapult", "Trebuchet", "SiegeEngine", "Flamethrower", "Grenade", "Mine", "Claymore",
        "Rifle", "Carbine", "Shotgun", "Submachine", "Machinegun", "AssaultRifle", "Sniper", "Pistol", "Magnum", "DesertEagle",
        "BladeRunner", "Darkblade", "Fireblade", "Iceblade", "Shadowfang", "Stormbreaker", "Thunderbolt", "Ironclad", "Steelheart", "Dragonfang",
        "Wolfsbane", "Lionclaw", "Serpenttooth", "Viperstrike", "Razor", "Slicer", "Ripper", "Shredder", "Annihilator", "Destroyer",
        "Devastator", "Executioner", "Punisher", "Retaliator", "Vindicator", "Reaper", "Slaughter", "Oblivion", "Nemesis", "Vengeance",
        "Doom", "Ruin", "Cataclysm", "Apocalypse", "Eclipse", "Singularity", "Nullifier", "Disruptor", "Blaster", "Phaser",
        "PlasmaCutter", "LaserRifle", "Railgun", "Gauntlet", "Knuckles", "SpikeFist", "Shockwave", "VortexGun", "EnergyBeam", "ForceEmitter"
    ],
    Baby: [
        "Tiny", "Sweetie", "Peanut", "Munchkin", "Bubbles", "Cuddles", "Snugglebug", "Button", "Bean", "Pookie",
        "Honey", "Angel", "Sunshine", "Star", "Moonbeam", "Pixie", "Fairy", "Elf", "Gnome", "Sprite",
        "Dolly", "Teddy", "Bunny", "Kitty", "Puppy", "Birdie", "Lamb", "BearCub", "Chipmunk", "Hedgehog",
        "Petal", "Blossom", "Dewdrop", "Sparkle", "Glimmer", "Rainbow", "Cloud", "Dreamer", "Joy", "Bliss",
        "Charm", "Cherish", "Lovebug", "Heart", "Treasure", "Gift", "Miracle", "Blessing", "Wonder", "Hope",
        "Winks", "Giggles", "Smiley", "Coo", "Gurgle", "Bouncy", "Dimples", "Rosy", "Puffy", "Snuggles",
        "LittleOne", "SmallFry", "MiniMe", "Sprout", "Bloom", "Bud", "Pip", "Wriggle", "PitterPatter", "SweetPea",
        "Sugarplum", "Dumpling", "Cupcake", "Cookie", "Biscuit", "Muffin", "Pancake", "Waffle", "Berry", "Cherry",
        "Apple", "Peach", "Plum", "Clementine", "Marshmallow", "Toffee", "Cinnamon", "Ginger", "Nutmeg", "Clover",
        "Willow", "River", "Brook", "Pebble", "Stone", "Leaf", "Acorn", "Twig", "Sproutling", "Sapling"
    ],
};

// --- 2. MARKOV CHAIN LOGIC (Reusable) ---
// MARKOV_ORDER is now read from user input

// Data for Markov Chain (IMPORTANT: Ensure this 'nameData' object is defined earlier in your file)
// If you don't have this, you need to add it somewhere at the top of your main.js

function buildMarkovChain(names, markovOrder) {
    const chain = {};
    const processedNames = names
        .filter(name => name.trim() !== '')
        .map(name => "@".repeat(markovOrder) + name.toLowerCase().trim() + "$");

    if (processedNames.length === 0) {
        return null;
    }

    for (const name of processedNames) {
        for (let i = 0; i < name.length - markovOrder; i++) {
            const prefix = name.substring(i, i + markovOrder);
            const nextChar = name[i + markovOrder];

            if (!chain[prefix]) {
                chain[prefix] = {};
            }
            if (!chain[prefix][nextChar]) {
                chain[prefix][nextChar] = 0;
            }
            chain[prefix][nextChar]++;
        }
    }

    for (const prefix in chain) {
        const nextCharsCounts = chain[prefix];
        let total = 0;
        for (const char in nextCharsCounts) {
            total += nextCharsCounts[char];
        }
        for (const char in nextCharsCounts) {
            nextCharsCounts[char] /= total;
        }
    }
    return chain;
}

function generateNickname(chain, markovOrder, options = {}) {
    const { maxLength = 12, minLength = 3, startsWith = '', endsWith = '', includesText = '' } = options;

    let currentPrefix = "@".repeat(markovOrder);
    let nickname = "";

    while (true) {
        const possibleNextChars = chain[currentPrefix];

        if (!possibleNextChars) {
            break;
        }

        let nextChar = null;
        let randomValue = Math.random();
        let cumulativeProbability = 0;

        for (const char in possibleNextChars) {
            cumulativeProbability += possibleNextChars[char];
            if (randomValue <= cumulativeProbability) {
                nextChar = char;
                break;
            }
        }

        if (nextChar === null || nextChar === "$") {
            break;
        }

        nickname += nextChar;
        currentPrefix = currentPrefix.substring(1) + nextChar;

        if (nickname.length >= maxLength) {
            break;
        }
    }

    // Capitalize the first letter
    let finalNickname = nickname.charAt(0).toUpperCase() + nickname.slice(1);

    // Apply filters
    const meetsFilters =
        (finalNickname.length >= minLength) &&
        (startsWith === '' || finalNickname.toLowerCase().startsWith(startsWith.toLowerCase())) &&
        (endsWith === '' || finalNickname.toLowerCase().endsWith(endsWith.toLowerCase())) &&
        (includesText === '' || finalNickname.toLowerCase().includes(includesText.toLowerCase()));

    if (meetsFilters) {
        return finalNickname;
    } else {
        return ""; // Indicate failure to meet filters
    }
}

// --- 2. UI Element Constants ---

const generateBtn = document.getElementById('generateBtn');
const copyBtn = document.getElementById('copyBtn');
const saveBtn = document.getElementById('saveBtn');
const generatedNicknameInput = document.getElementById('generatedNickname');
const categoryRadios = document.querySelectorAll('input[name="nicknameCategory"]');
const userWordsInput = document.getElementById('userWords');
const userWordsRadio = document.getElementById('userCustom');
const savedNicknamesList = document.getElementById('savedNicknamesList');
const markovOrderInput = document.getElementById('markovOrder');
// Ensure backToCategoriesBtn is defined, if not, add it earlier in your file, e.g.:
const backToCategoriesBtn = document.getElementById('backToCategoriesBtn');


// NEW: Constants for filter inputs
const minLengthInput = document.getElementById('minLength');
const maxLengthInput = document.getElementById('maxLength');
const startsWithInput = document.getElementById('startsWith');
const endsWithInput = document.getElementById('endsWith');
const includesTextInput = document.getElementById('includesText');

// NEW: Constant for the random category button
const randomCategoryBtn = document.getElementById('randomCategoryBtn');

// NEW: Constants for collection management UI
const newCollectionNameInput = document.getElementById('newCollectionName');
const addCollectionBtn = document.getElementById('addCollectionBtn');
const currentCollectionSelect = document.getElementById('currentCollection');

// NEW: Constant for the share button
const shareBtn = document.getElementById('shareBtn');


// --- 3. UI Interaction Logic (Functions) ---

function handleGenerateNickname() {
    let namesForChain = [];
    let currentMarkovOrder = parseInt(markovOrderInput.value);

    // Read filter values
    const minLength = parseInt(minLengthInput.value) || 3;
    const maxLength = parseInt(maxLengthInput.value) || 12;
    const startsWith = startsWithInput.value.trim();
    const endsWith = endsWithInput.value.trim();
    const includesText = includesTextInput.value.trim();

    // Validate Markov Order
    if (isNaN(currentMarkovOrder) || currentMarkovOrder < 1 || currentMarkovOrder > 5) {
        generatedNicknameInput.value = "Markov Order must be between 1 and 5!";
        copyBtn.style.display = 'none';
        saveBtn.style.display = 'none';
        shareBtn.style.display = 'none';
        return;
    }
    // Validate Length filters
    if (minLength > maxLength) {
        generatedNicknameInput.value = "Min Length cannot be greater than Max Length!";
        copyBtn.style.display = 'none';
        saveBtn.style.display = 'none';
        shareBtn.style.display = 'none';
        return;
    }
    if (minLength < 1 || maxLength < 1) {
        generatedNicknameInput.value = "Length must be at least 1!";
        copyBtn.style.display = 'none';
        saveBtn.style.display = 'none';
        shareBtn.style.display = 'none';
        return;
    }

    if (userWordsRadio.checked) {
        const rawInput = userWordsInput.value;
        namesForChain = rawInput.split(/[\n, ]+/)
                                .map(word => word.trim())
                                .filter(word => word.length > 0);

        if (namesForChain.length === 0) {
            generatedNicknameInput.value = "Please enter some words in the custom list!";
            copyBtn.style.display = 'none';
            saveBtn.style.display = 'none';
            shareBtn.style.display = 'none';
            return;
        }
    } else {
        let selectedCategory = 'gaming';

        for (const radio of categoryRadios) {
            if (radio.checked) {
                selectedCategory = radio.value;
                break;
            }
        }
        namesForChain = nameData[selectedCategory];

        if (!namesForChain || namesForChain.length === 0) {
            generatedNicknameInput.value = "No names for this category!";
            copyBtn.style.display = 'none';
            saveBtn.style.display = 'none';
            shareBtn.style.display = 'none';
            return;
        }
    }

    const currentChain = buildMarkovChain(namesForChain, currentMarkovOrder);

    if (!currentChain) {
        generatedNicknameInput.value = "Not enough valid words to generate a nickname. Try adding more!";
        copyBtn.style.display = 'none';
        saveBtn.style.display = 'none';
        shareBtn.style.display = 'none';
        return;
    }

    let newNickname = "";
    let attempts = 0;
    const maxAttempts = 200; // Increased attempts for filters

    const filterOptions = {
        minLength: minLength,
        maxLength: maxLength,
        startsWith: startsWith,
        endsWith: endsWith,
        includesText: includesText
    };

    while ((!newNickname || newNickname.length < minLength) && attempts < maxAttempts) {
        newNickname = generateNickname(currentChain, currentMarkovOrder, filterOptions);
        attempts++;
    }

    if (!newNickname || newNickname.length < minLength) {
        generatedNicknameInput.value = "Could not generate a suitable nickname with current filters. Try relaxing them or adjusting Markov Order/words!";
        copyBtn.style.display = 'none';
        saveBtn.style.display = 'none';
        shareBtn.style.display = 'none';
    } else {
        generatedNicknameInput.value = newNickname;
        copyBtn.style.display = 'inline-block';
        saveBtn.style.display = 'inline-block';
        shareBtn.style.display = 'inline-block';
    }
}

function copyNickname() {
    generatedNicknameInput.select();
    generatedNicknameInput.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(generatedNicknameInput.value)
        .then(() => {
            const originalText = copyBtn.textContent;
            copyBtn.textContent = "COPIED!";
            setTimeout(() => {
                copyBtn.textContent = originalText;
            }, 1500);
        })
        .catch(err => {
            console.error('Failed to copy text: ', err);
            // Fallback for older browsers
            document.execCommand('copy');
            alert('Nickname copied to clipboard!');
        });
}

function shareNickname() {
    const nicknameToShare = generatedNicknameInput.value;

    if (!nicknameToShare || nicknameToShare === "Your new nickname appears here..." || nicknameToShare.includes("Could not generate") || nicknameToShare.includes("No names for this category") || nicknameToShare.includes("Please enter some words") || nicknameToShare.includes("Markov Order must be")) {
        alert("Generate a valid nickname first to share!");
        return;
    }

    if (navigator.share) {
        navigator.share({
            title: 'My New Nickname!',
            text: `Check out my new nickname: "${nicknameToShare}" from the Nickname Generator!`,
            url: window.location.href
        }).then(() => {
            console.log('Successfully shared');
        }).catch((error) => {
            console.error('Error sharing:', error);
            alert('Failed to share. You can manually copy the nickname.');
        });
    } else {
        navigator.clipboard.writeText(nicknameToShare)
            .then(() => {
                const originalText = shareBtn.textContent;
                shareBtn.textContent = "COPIED TO CLIPBOARD!";
                setTimeout(() => {
                    shareBtn.textContent = originalText;
                }, 2000);
            })
            .catch(err => {
                console.error('Failed to copy text for sharing: ', err);
                alert('Web Share API not supported. Nickname: "' + nicknameToShare + '" copied to clipboard.');
            });
    }
}

function getSavedData() {
    let savedData = JSON.parse(localStorage.getItem('savedNicknamesData')) || {};
    if (Object.keys(savedData).length === 0) {
        savedData['Default'] = [];
        localStorage.setItem('savedNicknamesData', JSON.stringify(savedData));
    }
    return savedData;
}

function saveNickname() {
    const nicknameToSave = generatedNicknameInput.value;
    if (!nicknameToSave || nicknameToSave === "Your new nickname appears here..." || nicknameToSave.includes("Could not generate") || nicknameToSave.includes("No names for this category") || nicknameToSave.includes("Please enter some words") || nicknameToSave.includes("Markov Order must be")) {
        return;
    }

    let savedData = getSavedData();
    const activeCollection = currentCollectionSelect.value || 'Default';

    if (!savedData[activeCollection]) {
        savedData[activeCollection] = [];
    }

    if (!savedData[activeCollection].includes(nicknameToSave)) {
        savedData[activeCollection].push(nicknameToSave);
        localStorage.setItem('savedNicknamesData', JSON.stringify(savedData));
        displaySavedNicknames();

        const originalText = saveBtn.textContent;
        saveBtn.textContent = "SAVED!";
        setTimeout(() => {
            saveBtn.textContent = originalText;
        }, 1500);
    } else {
        const originalText = saveBtn.textContent;
        saveBtn.textContent = "ALREADY SAVED!";
        setTimeout(() => {
            saveBtn.textContent = originalText;
        }, 1500);
    }
}

function deleteNickname(collectionName, nicknameIndex) {
    let savedData = getSavedData();
    if (savedData[collectionName] && nicknameIndex > -1 && nicknameIndex < savedData[collectionName].length) {
        savedData[collectionName].splice(nicknameIndex, 1);

        if (savedData[collectionName].length === 0 && collectionName !== 'Default') {
            delete savedData[collectionName];
            if (currentCollectionSelect.value === collectionName) {
                currentCollectionSelect.value = 'Default';
            }
            populateCollectionSelect();
        }

        localStorage.setItem('savedNicknamesData', JSON.stringify(savedData));
        displaySavedNicknames();
    }
}

function addCollection() {
    const newName = newCollectionNameInput.value.trim();
    if (newName && newName.length > 0) {
        let savedData = getSavedData();
        if (!savedData[newName]) {
            savedData[newName] = [];
            localStorage.setItem('savedNicknamesData', JSON.stringify(savedData));
            newCollectionNameInput.value = '';
            populateCollectionSelect(newName);
            displaySavedNicknames();
        } else {
            alert('Collection "' + newName + '" already exists!');
        }
    }
}

function populateCollectionSelect(selectedCollection = null) {
    currentCollectionSelect.innerHTML = '';
    const savedData = getSavedData();
    const collectionNames = Object.keys(savedData).sort();

    if (collectionNames.length === 0) {
        const option = document.createElement('option');
        option.value = '';
        option.textContent = 'No Collections Available';
        currentCollectionSelect.appendChild(option);
        currentCollectionSelect.disabled = true;
        return;
    } else {
        currentCollectionSelect.disabled = false;
    }

    collectionNames.forEach(name => {
        const option = document.createElement('option');
        option.value = name;
        option.textContent = name;
        currentCollectionSelect.appendChild(option);
    });

    const storedActiveCollection = localStorage.getItem('activeCollection');
    if (selectedCollection && savedData[selectedCollection]) {
        currentCollectionSelect.value = selectedCollection;
    } else if (storedActiveCollection && savedData[storedActiveCollection]) {
        currentCollectionSelect.value = storedActiveCollection;
    } else if (savedData['Default']) {
        currentCollectionSelect.value = 'Default';
    }
}

function displaySavedNicknames() {
    savedNicknamesList.innerHTML = '';
    const savedData = getSavedData();
    const collectionNames = Object.keys(savedData).sort();

    if (collectionNames.length === 0 || (collectionNames.length === 1 && savedData['Default'] && savedData['Default'].length === 0)) {
        savedNicknamesList.innerHTML = '<p class="instruction-text">No nicknames saved yet in any collection.</p>';
        return;
    }

    collectionNames.forEach(collectionName => {
        const nicknamesInCollection = savedData[collectionName];
        if (nicknamesInCollection && nicknamesInCollection.length > 0) {
            const collectionDiv = document.createElement('div');
            collectionDiv.classList.add('nickname-collection');

            const collectionHeader = document.createElement('h3');
            collectionHeader.textContent = collectionName;
            collectionDiv.appendChild(collectionHeader);

            const nicknameList = document.createElement('div');
            nicknameList.classList.add('nickname-list-items');

            nicknamesInCollection.forEach((nickname, index) => {
                const listItem = document.createElement('div');
                listItem.classList.add('saved-nickname-item');
                listItem.innerHTML = `
                    <span>${nickname}</span>
                    <button class="delete-nickname-btn" data-collection="${collectionName}" data-index="${index}">X</button>
                `;
                nicknameList.appendChild(listItem);
            });
            collectionDiv.appendChild(nicknameList);
            savedNicknamesList.appendChild(collectionDiv);
        }
    });
}

function toggleCustomInput() {
    const categoryRadiosContainer = document.querySelector('.radio-group');
    const userWordsContainer = document.getElementById('userWordsContainer');
    const markovOrderContainer = document.querySelector('.markov-order-selection');
    const filterOptionsContainer = document.querySelector('.filter-options');

    if (userWordsRadio.checked) {
        categoryRadiosContainer.style.display = 'none';
        userWordsContainer.style.display = 'block';
        markovOrderContainer.style.display = 'block';
        filterOptionsContainer.style.display = 'block';
        randomCategoryBtn.style.display = 'none';
    } else {
        categoryRadiosContainer.style.display = 'flex';
        userWordsContainer.style.display = 'none';
        markovOrderContainer.style.display = 'block';
        filterOptionsContainer.style.display = 'block';
        randomCategoryBtn.style.display = 'inline-block';
    }
    generatedNicknameInput.value = "";
    copyBtn.style.display = 'none';
    saveBtn.style.display = 'none';
    shareBtn.style.display = 'none';
}

// --- 4. Event Listeners (DOMContentLoaded) ---

document.addEventListener('DOMContentLoaded', () => {

    // Main generator buttons
    generateBtn.addEventListener('click', handleGenerateNickname);
    copyBtn.addEventListener('click', copyNickname);
    saveBtn.addEventListener('click', saveNickname);
    shareBtn.addEventListener('click', shareNickname);

    // Category & Custom input switching
    categoryRadios.forEach(radio => {
        radio.addEventListener('change', toggleCustomInput);
    });
    userWordsRadio.addEventListener('change', toggleCustomInput);

    // Listener for Markov Order input to clear generated nickname on change
    markovOrderInput.addEventListener('input', () => {
        generatedNicknameInput.value = "";
        copyBtn.style.display = 'none';
        saveBtn.style.display = 'none';
        shareBtn.style.display = 'none';
    });

    // Event listeners for Filter inputs to clear generated nickname on change
    minLengthInput.addEventListener('input', () => { generatedNicknameInput.value = ""; copyBtn.style.display = 'none'; saveBtn.style.display = 'none'; shareBtn.style.display = 'none'; });
    maxLengthInput.addEventListener('input', () => { generatedNicknameInput.value = ""; copyBtn.style.display = 'none'; saveBtn.style.display = 'none'; shareBtn.style.display = 'none'; });
    startsWithInput.addEventListener('input', () => { generatedNicknameInput.value = ""; copyBtn.style.display = 'none'; saveBtn.style.display = 'none'; shareBtn.style.display = 'none'; });
    endsWithInput.addEventListener('input', () => { generatedNicknameInput.value = ""; copyBtn.style.display = 'none'; saveBtn.style.display = 'none'; shareBtn.style.display = 'none'; });
    includesTextInput.addEventListener('input', () => { generatedNicknameInput.value = ""; copyBtn.style.display = 'none'; saveBtn.style.display = 'none'; shareBtn.style.display = 'none'; });

    // Event listener for the "Back to Categories" button
    backToCategoriesBtn.addEventListener('click', () => {
        const defaultCategoryRadio = document.getElementById('categoryGaming');
        if (defaultCategoryRadio) {
            defaultCategoryRadio.checked = true;
            defaultCategoryRadio.dispatchEvent(new Event('change'));
        }
    });

    // Event listener for Random Category button
    randomCategoryBtn.addEventListener('click', () => {
        const categoryKeys = Object.keys(nameData);
        const filterableCategoryKeys = categoryKeys.filter(key => key !== 'userCustom');

        if (filterableCategoryKeys.length > 0) {
            const randomIndex = Math.floor(Math.random() * filterableCategoryKeys.length);
            const randomCategory = filterableCategoryKeys[randomIndex];

            const radioToSelect = document.getElementById(`category${randomCategory.charAt(0).toUpperCase() + randomCategory.slice(1)}`);
            if (radioToSelect) {
                radioToSelect.checked = true;
                toggleCustomInput();
                handleGenerateNickname();
            } else {
                console.warn(`Radio button for category ${randomCategory} not found. Ensure ID format is 'categoryCategoryName'.`);
                handleGenerateNickname();
            }
        } else {
            generatedNicknameInput.value = "No categories available to select randomly!";
            copyBtn.style.display = 'none';
            saveBtn.style.display = 'none';
            shareBtn.style.display = 'none';
        }
    });

    // Event listeners for Collection Management
    addCollectionBtn.addEventListener('click', addCollection);
    currentCollectionSelect.addEventListener('change', () => {
        localStorage.setItem('activeCollection', currentCollectionSelect.value);
        displaySavedNicknames();
    });

    // Updated Event Delegation for Delete Buttons (now handling collection and index)
    savedNicknamesList.addEventListener('click', function(event) {
        if (event.target.classList.contains('delete-nickname-btn')) {
            const collectionName = event.target.dataset.collection;
            const indexToDelete = parseInt(event.target.dataset.index);

            if (collectionName && !isNaN(indexToDelete)) {
                deleteNickname(collectionName, indexToDelete);
            } else {
                console.error("Invalid data for deletion:", event.target.dataset.collection, event.target.dataset.index);
            }
        }
    });

    // Initial state setup on page load
    generatedNicknameInput.placeholder = "Your new nickname appears here...";
    copyBtn.style.display = 'none';
    saveBtn.style.display = 'none';
    shareBtn.style.display = 'none';
    toggleCustomInput();
    populateCollectionSelect();
    displaySavedNicknames();

});
