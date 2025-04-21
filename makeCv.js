const fs = require("fs");

// Complete JSON data for scientific articles, book chapters, and doctoral theses
var scientificArticles = [
	{
		title:
			"Everything You Wanted to Know About Phase and Reference Frequency in One- and Two-Dimensional NMR Spectroscopy",
		authors: "Sheberstov, K.; Sistare Guardiola, E.; Jeannerat, D.",
		journal: "Magnetic Resonance in Chemistry",
		year: 2020,
		volume: "58",
		issue: "5",
		pages: "376–389",
		doi: "https://doi.org/10.1002/mrc.4938",
	},
	{
		title:
			"SAN Plot: A Graphical Representation of the Signal, Noise, and Artifacts Content of Spectra",
		authors:
			"Sheberstov, K. F.; Sistare Guardiola, E.; Pupier, M.; Jeannerat, D.",
		journal: "Magnetic Resonance in Chemistry",
		year: 2020,
		volume: "58",
		issue: "5",
		pages: "",
		doi: "https://doi.org/10.1002/mrc.4882",
	},
	{
		title:
			"The Value of Universally Available Raw NMR Data for Transparency, Reproducibility, and Integrity in Natural Product Research",
		authors: "McAlpine, J. B.; Pauli, G. F.",
		journal: "Natural Product Reports",
		year: 2019,
		volume: "36",
		issue: "1",
		pages: "35–107",
		doi: "https://doi.org/10.1039/c7np00064b",
	},
	{
		title:
			"Homonuclear Decoupling in the 13C Indirect Dimension of HSQC Experiments for 13C-Enriched Compounds",
		authors: "Brucka, A.; Sheberstov, K.; Jeannerat, D.",
		journal: "Magnetic Resonance in Chemistry",
		year: 2018,
		volume: "56",
		issue: "10",
		pages: "1021–1028",
		doi: "https://doi.org/10.1002/mrc.4697",
	},
	{
		title:
			"NMReDATA, a Standard to Report the NMR Assignment and Parameters of Organic Compounds",
		authors:
			"Pupier, M.; Nuzillard, J.-M.; Wist, J.; Schlörer, N. E.; Kuhn, S.; Erdelyi, M.; Steinbeck, C.; Williams, A. J.; Butts, C.; Claridge, T. D. W.; Mikhova, B.; Robien, W.; Dashti, H.; Eghbalnia, H. R.; Farès, C.; Adam, C.; Kessler, P.; Moriaud, F.; Elyashberg, M.; Argyropoulos, D.; Pérez, M.; Giraudeau, P.; Gil, R. R.; Trevorrow, P.; Jeannerat, D.",
		journal: "Magnetic Resonance in Chemistry",
		year: 2018,
		volume: "56",
		issue: "8",
		pages: "703–715",
		doi: "https://doi.org/10.1002/mrc.4737",
	},
	{
		title: "Software Tools and Tutorials in Liquid State NMR",
		authors: "Jeannerat, D.",
		journal: "Magnetic Resonance in Chemistry",
		year: 2018,
		volume: "56",
		issue: "6",
		pages: "373",
		doi: "https://doi.org/10.1002/mrc.4734",
	},
	{
		title:
			"Targeted Isolation of Monoterpene Indole Alkaloids from Palicourea Sessilis",
		authors:
			"Klein-Júnior, L. C.; Cretton, S.; Allard, P.-M.; Genta-Jouve, G.; Passos, C. S.; Salton, J.; Bertelli, P.; Pupier, M.; Jeannerat, D.; Heyden, Y. V.; Gasper, A. L.; Wolfender, J.-L.; Christen, P.; Henriques, A. T.",
		journal: "Journal of Natural Products",
		year: 2017,
		volume: "80",
		issue: "11",
		pages: "3032–3037",
		doi: "https://doi.org/10.1021/acs.jnatprod.7b00681",
	},
	{
		title:
			"Elimination of Signals Tilting Caused by B0 Field Inhomogeneity Using 2D-Lineshape Reference Deconvolution",
		authors: "Sheberstov, K.; Sinitsyn, D. O.; Cheshkov, D. A.; Jeannerat, D.",
		journal: "Journal of Magnetic Resonance",
		year: 2017,
		volume: "281",
		pages: "229–240",
		doi: "https://doi.org/10.1016/j.jmr.2017.06.005",
	},
	{
		title:
			"Human- and Computer-Accessible 2D Correlation Data for a More Reliable Structure Determination of Organic Compounds",
		authors: "Jeannerat, D.",
		journal: "Magnetic Resonance in Chemistry",
		year: 2017,
		volume: "55",
		issue: "1",
		pages: "7–14",
		doi: "https://doi.org/10.1002/mrc.4527",
	},
	{
		title:
			"Characterization of Dimethylsulfoxide / Glycerol Mixtures: A Binary Solvent System for the Study of 'Friction-Dependent' Chemical Reactivity",
		authors:
			"Angulo Nunez, G. M.; Brucka, A.; Gerecke, M.; Grampp, G.; Jeannerat, D.; Milkiewicz, J.; Mitrev, Y. N.; Radzewicz, C.; Rosspeintner, A.; Vauthey, E.; Wnuk, P.",
		journal: "Physical Chemistry Chemical Physics",
		year: 2016,
		volume: "18",
		pages: "18460–18469",
		doi: "https://doi.org/10.1039/C6CP02997C",
	},
];

const bookChapters = [
	{
		title: "Analysis of the Phases of Signals in Two-Dimensional NMR",
		authors: "Jeannerat, D.",
		book: "eMagRes; Encyclopedia of Magnetic Resonance",
		year: 2017,
		publisher: "Wiley",
		doi: "https://doi.org/10.1002/9780470034590.emrstm1538",
	},
	{
		title: "Rapid Multidimensional NMR: High Resolution by Spectral Aliasing",
		authors: "Jeannerat, D.",
		book: "Encyclopedia of Magnetic Resonance; Harris, R. K. & Wasylishen, R. E., Ed.",
		year: 2011,
		publisher: "John Wiley: Chichester",
		doi: "https://doi.org/10.1002/9780470034590.emrstm1187",
	},
	{
		title: "Computer Processing Techniques in High-Resolution NMR",
		authors: "Jeannerat, D.",
		book: "Annual Reports on NMR Spectroscopy",
		year: 2002,
		publisher: "",
		doi: "https://doi.org/10.1016/S0066-4103(02)46019-X",
	},
];
// Adding more scientific articles
scientificArticles.push({
	title:
		"NMR Analysis of Weak Molecular Interactions Using Slice-Selective Experiments via Study of Concentration Gradients in Agar Gels",
	authors: "Mitrev, Y. N.; Simova, S.; Jeannerat, D.",
	journal: "Chemical communications",
	year: 2016,
	volume: "52",
	issue: "31",
	pages: "5418–5420",
	doi: "https://doi.org/10.1039/C6CC01853J",
});

scientificArticles.push({
	title:
		"Discrimination of Hexabromocyclododecane from New Polymeric Brominated Flame Retardant in Polystyrene Foam by Nuclear Magnetic Resonance",
	authors:
		"Jeannerat, D.; Pupier, M.; Schweizer, S.; Mitrev, Y. N.; Favreau, P.; Kohler, M.",
	journal: "Chemosphere",
	year: 2016,
	volume: "144",
	pages: "1391–1397",
	doi: "https://doi.org/10.1016/j.chemosphere.2015.10.021",
});

scientificArticles.push({
	title:
		"Reconstruction of Full High-Resolution HSQC Using Signal Split in Aliased Spectra",
	authors: "Foroozandeh, M.; Jeannerat, D.",
	journal: "Magnetic resonance in chemistry",
	year: 2015,
	volume: "53",
	issue: "11",
	pages: "894–900",
	doi: "https://doi.org/10.1002/mrc.4283",
});

scientificArticles.push({
	title:
		"Exploiting the Phase of NMR Signals to Carry Useful Information. Application to the Measurement of Chemical Shifts in Aliased 2D Spectra",
	authors: "Ramirez Gualito, K. E.; Jeannerat, D.",
	journal: "Magnetic resonance in chemistry",
	year: 2015,
	volume: "53",
	issue: "11",
	pages: "901–907",
	doi: "https://doi.org/10.1002/mrc.4301",
});

scientificArticles.push({
	title:
		"New Prostaglandin Analog Formulation for Glaucoma Treatment Containing Cyclodextrins for Improved Stability, Solubility and Ocular Tolerance",
	authors:
		"Rodriguez Aller, M. R.; Guinchard, S.; Guillarme, D.; Pupier, M.; Jeannerat, D.; Rivara-Minten, E.; Veuthey, J.-L.; Gurny, R.",
	journal: "European journal of pharmaceutics and biopharmaceutics",
	year: 2015,
	volume: "95",
	issue: "Part B",
	pages: "203–214",
	doi: "https://doi.org/10.1016/j.ejpb.2015.04.032",
});

scientificArticles.push({
	title:
		"1D NMR Homodecoupled 1H Spectra with Scalar Coupling Constants from 2D NemoZS-DIAG Experiments",
	authors: "Cotte, A.; Jeannerat, D.",
	journal: "Angewandte Chemie",
	year: 2015,
	volume: "54",
	issue: "20",
	pages: "6016–6018",
	doi: "https://doi.org/10.1002/anie.201500831",
});
scientificArticles.push({
	title: "Ultrahigh-Resolution NMR Spectroscopy",
	authors:
		"Foroozandeh, M.; Adams, R. W.; Meharry, N. J.; Jeannerat, D.; Nilsson, M.; Morris, G. A.",
	journal: "Angewandte Chemie",
	year: 2014,
	volume: "53",
	issue: "27",
	pages: "6990–6992",
	doi: "https://doi.org/10.1002/anie.201404111",
});

scientificArticles.push({
	title:
		"A Toolbox of HSQC Experiments for Small Molecules at High 13C-Enrichment. Artifact-Free, Fully 13C-Homodecoupled and JCC-Encoding Pulse Sequences",
	authors: "Foroozandeh, M.; Giraudeau, P.; Jeannerat, D.",
	journal: "Magnetic resonance in chemistry",
	year: 2013,
	volume: "51",
	issue: "12",
	pages: "808–814",
	doi: "https://doi.org/10.1002/mrc.4019",
});

scientificArticles.push({
	title:
		"Comment on the Manuscript of Muñoz M.A. Et Al. Published in Phytochemistry Letters (2012) 5: 450–454 Entitled 'Absolute Configuration and Stereochemical Analysis of 3α,6β-Dibenzoyloxytropane'",
	authors: "Humam, M.; Shoul, T.; Jeannerat, D.; Muñoz, O.; Christen, P.",
	journal: "Phytochemistry letters",
	year: 2013,
	volume: "6",
	issue: "1",
	pages: "90",
	doi: "https://doi.org/10.1016/j.phytol.2012.11.002",
});

scientificArticles.push({
	title:
		"Towards Elucidation of the Drug Release Mechanism from Compressed Hydrophilic Matrices Made of Cellulose Ethers. III. Critical Use of Thermodynamic Parameters of Activation for Modeling the Water Penetration and Drug Release Processes",
	authors: "Ferrero, C.; Massuelle, D.; Jeannerat, D.; Doelker, E.",
	journal: "Journal of controlled release",
	year: 2013,
	volume: "170",
	issue: "2",
	pages: "175–182",
	doi: "https://doi.org/10.1016/j.jconrel.2013.05.016",
});

scientificArticles.push({
	title:
		"Structure and Dynamic of Three Indole Alkaloids from the Campylospermum Genus (Ochnaceae)",
	authors:
		"Bayiha Ba Njock, G.; Bartholomeusz, T. A.; Bikobo, D. N.; Foroozandeh, M.; Shivapurkar, R.; Christen, P.; Pegnyemb, D. E.; Jeannerat, D.",
	journal: "Helvetica chimica acta",
	year: 2013,
	volume: "96",
	issue: "7",
	pages: "1298–1304",
	doi: "https://doi.org/10.1002/hlca.201200327",
});
scientificArticles.push({
	title:
		"Cotte, A.; Foroozandeh, M.; Jeannerat, D. Combination of Homonuclear Decoupling and Spectral Aliasing to Increase the Resolution in the 1H Dimension of 2D NMR Experiments",
	authors: "Cotte, A.; Foroozandeh, M.; Jeannerat, D.",
	journal: "Chimia",
	year: 2012,
	volume: "66",
	issue: "10",
	pages: "764–769",
	doi: "https://doi.org/10.2533/chimia.2012.764",
});

scientificArticles.push({
	title:
		"Polyketide Skeletons from the Marine Alga-Derived Fungus Coniothyrium Cereale",
	authors:
		"Elsebai, M. F.; Nazir, M.; Kehraus, S.; Egereva, E.; Ndjoko Ioset, K.; Marcourt, L.; Jeannerat, D.; Gütschow, M.; Wolfender, J.-L.; König, G. M.",
	journal: "European journal of organic chemistry",
	year: 2012,
	volume: "2012",
	issue: "31",
	pages: "6197–6203",
	doi: "https://doi.org/10.1002/ejoc.201200700",
});

scientificArticles.push({
	title: "NMR Experiments for the Analysis of Mixtures: Beyond 1D 1H Spectra",
	authors: "Jeannerat, D.; Furrer, J.",
	journal: "Combinatorial chemistry & high throughput screening",
	year: 2012,
	volume: "15",
	issue: "1",
	pages: "15–35",
	doi: "",
});

scientificArticles.push({
	title:
		"Bayiha Ba Njock, G.; Bartholomeusz, T.; Foroozandeh, M.; Pegnyemb, D. E.; Christen, P.; Jeannerat, D. NASCA-HMBC, a New NMR Methodology for the Resolution of Severely Overlapping Signals: Application to the Study of Agathisflavone",
	authors:
		"Bayiha Ba Njock, G.; Bartholomeusz, T.; Foroozandeh, M.; Pegnyemb, D. E.; Christen, P.; Jeannerat, D.",
	journal: "Phytochemical analysis",
	year: 2011,
	volume: "23",
	issue: "2",
	pages: "126–130",
	doi: "https://doi.org/10.1002/pca.1333",
});

scientificArticles.push({
	title:
		"New and Old NMR Experiments for the Resonance Assignment of Complex Oligosaccharides-Application to a Cyclodextrin Derivative",
	authors:
		"Plainchont, B.; Martinez, A.; Tisse, S.; Bouillon, J.-P.; Pilard, F.; Wieruszeski, J.-M.; Lippens, G.; Jeannerat, D.; Nuzillard, J.-M.",
	journal: "Magnetic resonance in chemistry",
	year: 2011,
	volume: "49",
	issue: "12",
	pages: "781–787",
	doi: "https://doi.org/10.1002/mrc.2828",
});
scientificArticles.push({
	title:
		"Grahamines A–E, Cyclobutane-Centered Tropane Alkaloids from the Aerial Parts of Schizanthus Grahamii",
	authors:
		"Cretton, S.; Bartholomeusz, T.; Humam, M.; Marcourt, L.; Allenbach, Y.; Jeannerat, D.; Muñoz, O.; Christen, P.",
	journal: "Journal of natural products",
	year: 2011,
	volume: "74",
	issue: "11",
	pages: "2388–2394",
	doi: "https://doi.org/10.1021/np200450y",
});

scientificArticles.push({
	title:
		"Broadband 13C-Homodecoupled Heteronuclear Single-Quantum Correlation Nuclear Magnetic Resonance",
	authors: "Foroozandeh, M.; Giraudeau, P.; Jeannerat, D.",
	journal: "ChemPhysChem",
	year: 2011,
	volume: "12",
	issue: "13",
	pages: "2409–2411",
	doi: "https://doi.org/10.1002/cphc.201100411",
});

scientificArticles.push({
	title: "Chirality and Numbering of Substituted Tropane Alkaloids",
	authors: "Humam, M.; Shoul, T.; Jeannerat, D.; Muñoz, O.; Christen, P.",
	journal: "Molecules",
	year: 2011,
	volume: "16",
	issue: "9",
	pages: "7199–7209",
	doi: "https://doi.org/10.3390/molecules16097199",
});

scientificArticles.push({
	title:
		"Determination of the Relative pKa’s of Mixtures of Organic Acids Using NMR Titration Experiments Based on Aliased 1H–13C HSQC Spectra",
	authors: "Shivapurkar, R.; Jeannerat, D.",
	journal: "Analytical methods",
	year: 2011,
	volume: "3",
	issue: "6",
	pages: "1316–1322",
	doi: "https://doi.org/10.1039/c0ay00771d",
});

scientificArticles.push({
	title:
		"An Efficient Method for the Production of Isotopically Enriched Cholesterol for NMR",
	authors: "Shivapurkar, R.; Souza, C. M.; Jeannerat, D.; Riezman, H.",
	journal: "Journal of lipid research",
	year: 2011,
	volume: "52",
	issue: "5",
	pages: "1062–1065",
	doi: "https://doi.org/10.1194/jlr.D014209",
});

scientificArticles.push({
	title:
		"Schizanthines N, O, and P, Tropane Alkaloids from the Aerial Parts of Schizanthus Tricolor",
	authors:
		"Humam, M.; Kehrli, T.; Jeannerat, D.; Muñoz, O.; Hostettmann, K.; Christen, P.",
	journal: "Journal of natural products",
	year: 2011,
	volume: "74",
	issue: "1",
	pages: "50–53",
	doi: "https://doi.org/10.1021/np1005423",
});

scientificArticles.push({
	title:
		"Plainchont, B.; Martinez, A.; Tisse, S.; Bouillon, J.-P.; Wieruszeski, J.-M.; Lippens, G.; Jeannerat, D.; Nuzillard, J.-M. An Alternative Scheme for the Multiplexed Acquisition of 1D and 2D NMR Spectra",
	authors:
		"Plainchont, B.; Martinez, A.; Tisse, S.; Bouillon, J.-P.; Wieruszeski, J.-M.; Lippens, G.; Jeannerat, D.; Nuzillard, J.-M.",
	journal: "Journal of magnetic resonance",
	year: 2010,
	volume: "206",
	issue: "1",
	pages: "68–73",
	doi: "https://doi.org/10.1016/j.jmr.2010.06.005",
});

scientificArticles.push({
	title:
		"Deciphered Chemical Shifts in Aliased Spectra Recorded with Two Slightly Different Narrow Windows or Differential Chemical Shift Evolution",
	authors: "Foroozandeh, M.; Jeannerat, D.",
	journal: "ChemPhysChem",
	year: 2010,
	volume: "11",
	issue: "12",
	pages: "2503–2505",
	doi: "https://doi.org/10.1002/cphc.201000421",
});

scientificArticles.push({
	title:
		"Njock, G. B. B.; Pegnyemb, D. E.; Bartholomeusz, T.; Christen, P.; Vitorge, B.; Nuzillard, J.-M.; Shivapurkar, R.; Foroozandeh, M.; Jeannerat, D. Spectral Aliasing: A Super Zoom for 2D-NMR Spectra. Principles and Applications",
	authors:
		"Njock, G. B. B.; Pegnyemb, D. E.; Bartholomeusz, T.; Christen, P.; Vitorge, B.; Nuzillard, J.-M.; Shivapurkar, R.; Foroozandeh, M.; Jeannerat, D.",
	journal: "Chimia",
	year: 2010,
	volume: "64",
	issue: "4",
	pages: "235–240",
	doi: "https://doi.org/10.2533/chimia.2010.235",
});
scientificArticles.push({
	title:
		"Isomeric Tropane Alkaloids from the Aerial Parts of Schizanthus Tricolor",
	authors:
		"Cretton, S.; Glauser, G.; Humam, M.; Jeannerat, D.; Muñoz, O.; Maes, L.; Christen, P.; Hostettmann, K.",
	journal: "Journal of natural products",
	year: 2010,
	volume: "73",
	issue: "5",
	pages: "844–847",
	doi: "https://doi.org/10.1021/np900780w",
});

scientificArticles.push({
	title: "Functional Biosupramolecular Systems",
	authors:
		"Montenegro, J.; Hennig, A.; Geotti-Bianchini, P.; Eggimann, G. A.; Jeannerat, D.; Matile, S.; Misek, J.; Schuster, T.; Uhlich, N. A.; Vargas, A.",
	journal: "Chimia",
	year: 2009,
	volume: "63",
	issue: "12",
	pages: "",
	doi: "https://doi.org/10.2533/chimia.2009.881",
});

scientificArticles.push({
	title:
		"Structure Determination of Slowly Exchanging Conformers in Solution Using High-Resolution NMR, Computational Modeling and DFT-GIAO Chemical Shieldings. Application to an Erythronolide A Derivative",
	authors: "Muri, D.; Corminboeuf, A.-C.; Carreira, E. M.; Jeannerat, D.",
	journal: "Magnetic resonance in chemistry",
	year: 2009,
	volume: "47",
	issue: "11",
	pages: "909–916",
	doi: "https://doi.org/10.1002/mrc.2476",
});

scientificArticles.push({
	title:
		"Mazet, C.; Zumbuehl, A.; Jeannerat, D.; Mareda, J.; Alexakis, A.; Kundig, E. P.; Lacour, J.; Matile, S. Organic Chemistry À La Genevoise",
	authors:
		"Mazet, C.; Zumbuehl, A.; Jeannerat, D.; Mareda, J.; Alexakis, A.; Kundig, E. P.; Lacour, J.; Matile, S.",
	journal: "Chimia",
	year: 2009,
	volume: "63",
	issue: "12",
	pages: "816–821",
	doi: "https://doi.org/10.2533/chimia.2009.816",
});

scientificArticles.push(
	{
		title:
			"Vitorge, B.; Bieri, S.; Humam, M.; Christen, P.; Hostettmann, K.; Muñoz, O.; Loss, S.; Jeannerat, D. High-Precision Heteronuclear 2D NMR Experiments Using 10-Ppm Spectral Window to Resolve Carbon Overlap",
		authors:
			"Vitorge, B.; Bieri, S.; Humam, M.; Christen, P.; Hostettmann, K.; Muñoz, O.; Loss, S.; Jeannerat, D.",
		journal: "Chemical communications",
		year: 2009,
		volume: "No. 8",
		pages: "950–952",
		doi: "https://doi.org/10.1039/b820478k",
	},

	{
		title:
			"High-Precision Heteronuclear 2D NMR Experiments Using 10-Ppm Spectral Window to Resolve Carbon Overlap",
		authors:
			"Vitorge, B.; Bieri, S.; Humam, M.; Christen, P.; Hostettmann, K.; Muñoz, O.; Loss, S.; Jeannerat, D.",
		journal: "Chemical communications",
		year: 2009,
		volume: "",
		issue: "8",
		pages: "950–952",
		doi: "https://doi.org/10.1039/b820478k",
	},
	{
		title:
			"Absolute Configuration of Tropane Alkaloids Bearing Two α,ß-Unsaturated Ester Functions Using Electronic CD Spectroscopy: Application to (R,R)-Trans-3-Hydroxysenecioyloxy-6-Senecioyloxytropane",
		authors:
			"Humam, M.; Christen, P.; Muñoz, O.; Hostettmann, K.; Jeannerat, D.",
		journal: "Chirality",
		year: 2008,
		volume: "20",
		issue: "1",
		pages: "20–25",
		doi: "https://doi.org/10.1002/chir.20481",
	},
	{
		title:
			"Linear Polynuclear Helicates as a Link between Discrete Supramolecular Complexes and Programmed Infinite Polymetallic Chains",
		authors:
			"Dalla-Favera, N.; Hamacek, J.; Borkovec, M.; Jeannerat, D.; Gumy, F.; Bünzli, J.-C. G.; Ercolani, G.; Piguet, C.",
		journal: "Chemistry",
		year: 2008,
		volume: "14",
		issue: "10",
		pages: "2994–3005",
		doi: "https://doi.org/10.1002/chem.200701465",
	},
	{
		title:
			"Real-Time Monitoring of a Dynamic Molecular System Using 1H-13C HSQC NMR Spectroscopy with an Optimized 13C Window",
		authors:
			"Gasparini, G.; Vitorge, B.; Scrimin, P.; Jeannerat, D.; Prins, L. J.",
		journal: "Chemical communications",
		year: 2008,
		volume: "",
		issue: "26",
		pages: "3034–3036",
		doi: "https://doi.org/10.1039/b803074j",
	},
	{
		title:
			"Towards Elucidation of the Drug Release Mechanism from Compressed Hydrophilic Matrices Made of Cellulose Ethers. I. Pulse-Field-Gradient Spin-Echo NMR Study of Sodium Salicylate Diffusivity in Swollen Hydrogels with Respect to Polymer Matrix Physical Structure",
		authors: "Ferrero, C.; Massuelle, D.; Jeannerat, D.; Doelker, E.",
		journal: "Journal of controlled release",
		year: 2008,
		volume: "128",
		issue: "1",
		pages: "71–79",
		doi: "https://doi.org/10.1016/j.jconrel.2008.02.006",
	},
	{
		title:
			"Interface Engineering of Synthetic Pores: Towards Hypersensitive Biosensors",
		authors:
			"Mora, F.; Tran, D.-H.; Oudry, N.; Hopfgartner, G.; Jeannerat, D.; Sakai, N.; Matile, S.",
		journal: "Chemistry",
		year: 2008,
		volume: "14",
		issue: "6",
		pages: "1947–1953",
		doi: "https://doi.org/10.1002/chem.200701520",
	},
	{
		title:
			"Computer Optimized Spectral Aliasing in the Indirect Dimension of 1H- 13C Heteronuclear 2D NMR Experiments. A New Algorithm and Examples of Applications to Small Molecules",
		authors: "Jeannerat, D.",
		journal: "Journal of magnetic resonance",
		year: 2007,
		volume: "186",
		issue: "1",
		pages: "112–122",
		doi: "https://doi.org/10.1016/j.jmr.2007.02.003",
	},
	{
		title: "Withanolides from Withania Adpressa",
		authors:
			"Abdeljebbara, L. H.; Humam, M.; Christen, P.; Jeannerat, D.; Vitorge, B.; Amzazi, S.; Benjouad, A.; Hostettmann, K.; Bekkoucheb, K.",
		journal: "Helvetica chimica acta",
		year: 2007,
		volume: "90",
		issue: "2",
		pages: "346–352",
		doi: "https://doi.org/10.1002/hlca.200790041",
	},
	{
		title:
			"Tuneable Intramolecular Intermetallic Interactions as a New Tool for Programming Linear Heterometallic 4f-4f Complexes",
		authors:
			"Dalla-Favera, N.; Hamacek, J.; Borkovec, M.; Jeannerat, D.; Ercolani, G.; Piguet, C.",
		journal: "Inorganic chemistry",
		year: 2007,
		volume: "46",
		issue: "22",
		pages: "9312–9322",
		doi: "https://doi.org/10.1021/ic701308h",
	},
	{
		title:
			"NMR Diffusion Measurements in Complex Mixtures Using Constant-Time HSQC-IDOSY and Computer-Optimized Spectral Aliasing for High Resolution in the Carbon Dimension",
		authors: "Vitorge, B.; Jeannerat, D.",
		journal: "Analytical chemistry",
		year: 2006,
		volume: "78",
		issue: "15",
		pages: "5601–5606",
		doi: "https://doi.org/10.1021/ac060744g",
	},
	{
		title:
			"New Staves for Old Barrels: Regioisomeric (12,22,33,42,53,62,73,82)-P-Octiphenyl Rods with an NMR Tag",
		authors: "Ronan, D.; Jeannerat, D.; Pinto, A.; Sakai, N.; Matile, S.",
		journal: "New Journal of Chemistry",
		year: 2006,
		volume: "30",
		issue: "2",
		pages: "168–176",
		doi: "https://doi.org/10.1039/b512276g",
	}
);

// Add any remaining entries following the same format.

// Ensure to continue this pattern until all remaining articles are added.

// Add more entries following the same pattern.

// Continue adding entries in the same way for the rest of the articles.

// Ensure to add more instances in a similar manner

const doctoralTheses = [
	{
		title:
			"Complementarity of Decoupling Elements with Respect to Spectral Quality in 2D Pure-Shift Homonuclear Experiments",
		authors: "Brucka, M.",
		year: 2019,
		type: "Doctoral Thesis",
		doi: "https://doi.org/10.13097/archive-ouverte/unige:127380",
	},
	{
		title:
			"Top Resolution in 2D NMR Experiments Combining Chemical Shift Encoded Aliased Spectra and Spectral Reconstruction",
		authors: "Sistare Guardiola, E.",
		year: 2019,
		type: "Doctoral Thesis",
		doi: "https://doi.org/10.13097/archive-ouverte/unige:118011",
	},
	{
		title: "From 2D to 1D Homodecoupled High-Resolution Proton NMR",
		authors: "Cotte, A.",
		year: 2015,
		type: "Doctoral Thesis",
		doi: "https://doi.org/10.13097/archive-ouverte/unige:75760",
	},
	{
		title:
			"NMR Pulse Sequence Developments for High Resolution in Heteronuclear 2D Experiments",
		authors: "Foroozandeh, M.",
		year: 2012,
		type: "Doctoral Thesis",
		doi: "https://doi.org/10.13097/archive-ouverte/unige:36984",
	},
	{
		title:
			"High Resolution in 2D NMR Using Spectral Aliasing: Application to the Determination of pKa’s by Automated NMR Titration and the Study of 13C-Enriched Cholesterol",
		authors: "Shivapurkar, R.",
		year: 2011,
		type: "Doctoral Thesis",
		doi: "https://doi.org/10.13097/archive-ouverte/unige:17300",
	},
	{
		title: "Applications Du Repliement Spectral En RMN À Deux Dimensions",
		authors: "Vitorge, B.",
		year: 2009,
		type: "Doctoral Thesis",
		doi: "https://doi.org/10.13097/archive-ouverte/unige:2024",
	},
];
// Initialize markdown content
let mdContent = "## Publications Damien Jeannerat\n\n";

// Generic section appending function
function appendSection(title, entries, formatEntryFn) {
	mdContent += `### ${title}\n`;
	entries.forEach((entry) => {
		mdContent += formatEntryFn(entry);
	});
	mdContent += "\n";
}

// Formatters
function formatScientificArticle(article) {
	const year = article.year || "";
	const volume = article.volume || "";
	const issue = article.issue || "";
	const pages = article.pages || "";
	return `- **${article.title}**  
    ${article.authors}
    *${article.journal}* ${year ? `**${year}**` : ""}${
		volume || issue ? `, ${volume}${issue ? `(${issue})` : ""}` : ""
	}${pages ? `, ${pages}` : ""} 
    [${article.doi}](${article.doi})\n\n`;
}

function formatBookChapter(chapter) {
	return `- **${chapter.title}**  
    ${chapter.authors}  
    ${chapter.book}, ${chapter.publisher || ""} **${chapter.year}**
     [${chapter.doi}](${chapter.doi})\n\n`;
}

function formatDoctoralThesis(thesis) {
	return `- ${thesis.authors}  (${thesis.year})
	**${thesis.title}**  
    [${thesis.doi}](${thesis.doi})\n\n`;
}

// Append all sections
appendSection(
	"Scientific Articles",
	scientificArticles,
	formatScientificArticle
);
appendSection("Book Chapters", bookChapters, formatBookChapter);
appendSection("PhD student thesis", doctoralTheses, formatDoctoralThesis);
const filename = "damienjeanneratStatic";
fs.writeFileSync(filename + ".md", mdContent, "utf8");
console.log("Markdown file generated: " + filename + ".md");
console.log("I found " + scientificArticles.length + " articles");
