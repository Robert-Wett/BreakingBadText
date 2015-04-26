var elements = {
	'h':{'symbol':'H', 'fullname': 'Hydrogen'},
	'he':{'symbol':'He', 'fullname': 'Helium'},
	'li':{'symbol':'Li', 'fullname': 'Lithium'},
	'be':{'symbol':'Be', 'fullname': 'Beryllium'},
	'b':{'symbol':'B', 'fullname': 'Boron'},
	'c':{'symbol':'C', 'fullname': 'Carbon'},
	'n':{'symbol':'N', 'fullname': 'Nitrogen'},
	'o':{'symbol':'O', 'fullname': 'Oxygen'},
	'f':{'symbol':'F', 'fullname': 'Fluorine'},
	'ne':{'symbol':'Ne', 'fullname': 'Neon'},
	'na':{'symbol':'Na', 'fullname': 'Sodium'},
	'mg':{'symbol':'Mg', 'fullname': 'Magnesium'},
	'al':{'symbol':'Al', 'fullname': 'Aluminum'},
	'si':{'symbol':'Si', 'fullname': 'Silicon'},
	'p':{'symbol':'P', 'fullname': 'Phosphorus'},
	's':{'symbol':'S', 'fullname': 'Sulfur'},
	'cl':{'symbol':'Cl', 'fullname': 'Chlorine'},
	'ar':{'symbol':'Ar', 'fullname': 'Argon'},
	'k':{'symbol':'K', 'fullname': 'Potassium'},
	'ca':{'symbol':'Ca', 'fullname': 'Calcium'},
	'sc':{'symbol':'Sc', 'fullname': 'Scandium'},
	'ti':{'symbol':'Ti', 'fullname': 'Titanium'},
	'v':{'symbol':'V', 'fullname': 'Vanadium'},
	'cr':{'symbol':'Cr', 'fullname': 'Chromium'},
	'mn':{'symbol':'Mn', 'fullname': 'Manganese'},
	'fe':{'symbol':'Fe', 'fullname': 'Iron'},
	'co':{'symbol':'Co', 'fullname': 'Cobalt'},
	'ni':{'symbol':'Ni', 'fullname': 'Nickel'},
	'cu':{'symbol':'Cu', 'fullname': 'Copper'},
	'zn':{'symbol':'Zn', 'fullname': 'Zinc'},
	'ga':{'symbol':'Ga', 'fullname': 'Gallium'},
	'ge':{'symbol':'Ge', 'fullname': 'Germanium'},
	'as':{'symbol':'As', 'fullname': 'Arsenic'},
	'se':{'symbol':'Se', 'fullname': 'Selenium'},
	'br':{'symbol':'Br', 'fullname': 'Bromine'},
	'kr':{'symbol':'Kr', 'fullname': 'Krypton'},
	'rb':{'symbol':'Rb', 'fullname': 'Rubidium'},
	'sr':{'symbol':'Sr', 'fullname': 'Strontium'},
	'y':{'symbol':'Y', 'fullname': 'Yttrium'},
	'zr':{'symbol':'Zr', 'fullname': 'Zirconium'},
	'nb':{'symbol':'Nb', 'fullname': 'Niobium'},
	'mo':{'symbol':'Mo', 'fullname': 'Molybdenum'},
	'tc':{'symbol':'Tc', 'fullname': 'Technetium'},
	'ru':{'symbol':'Ru', 'fullname': 'Ruthenium'},
	'rh':{'symbol':'Rh', 'fullname': 'Rhodium'},
	'pd':{'symbol':'Pd', 'fullname': 'Palladium'},
	'ag':{'symbol':'Ag', 'fullname': 'Silver'},
	'cd':{'symbol':'Cd', 'fullname': 'Cadmium'},
	'in':{'symbol':'In', 'fullname': 'Indium'},
	'sn':{'symbol':'Sn', 'fullname': 'Tin'},
	'sb':{'symbol':'Sb', 'fullname': 'Antimony'},
	'te':{'symbol':'Te', 'fullname': 'Tellurium'},
	'i':{'symbol':'I', 'fullname': 'Iodine'},
	'xe':{'symbol':'Xe', 'fullname': 'Xenon'},
	'cs':{'symbol':'Cs', 'fullname': 'Cesium'},
	'ba':{'symbol':'Ba', 'fullname': 'Barium'},
	'la':{'symbol':'La', 'fullname': 'Lanthanum'},
	'ce':{'symbol':'Ce', 'fullname': 'Cerium'},
	'pr':{'symbol':'Pr', 'fullname': 'Praseodymium'},
	'nd':{'symbol':'Nd', 'fullname': 'Neodymium'},
	'pm':{'symbol':'Pm', 'fullname': 'Promethium'},
	'sm':{'symbol':'Sm', 'fullname': 'Samarium'},
	'eu':{'symbol':'Eu', 'fullname': 'Europium'},
	'gd':{'symbol':'Gd', 'fullname': 'Gadolinium'},
	'tb':{'symbol':'Tb', 'fullname': 'Terbium'},
	'dy':{'symbol':'Dy', 'fullname': 'Dysprosium'},
	'ho':{'symbol':'Ho', 'fullname': 'Holmium'},
	'er':{'symbol':'Er', 'fullname': 'Erbium'},
	'tm':{'symbol':'Tm', 'fullname': 'Thulium'},
	'yb':{'symbol':'Yb', 'fullname': 'Ytterbium'},
	'lu':{'symbol':'Lu', 'fullname': 'Lutetium'},
	'hf':{'symbol':'Hf', 'fullname': 'Hafnium'},
	'ta':{'symbol':'Ta', 'fullname': 'Tantalum'},
	'w':{'symbol':'W', 'fullname': 'Tungsten'},
	're':{'symbol':'Re', 'fullname': 'Rhenium'},
	'os':{'symbol':'Os', 'fullname': 'Osmium'},
	'ir':{'symbol':'Ir', 'fullname': 'Iridium'},
	'pt':{'symbol':'Pt', 'fullname': 'Platinum'},
	'au':{'symbol':'Au', 'fullname': 'Gold'},
	'hg':{'symbol':'Hg', 'fullname': 'Mercury'},
	'tl':{'symbol':'Tl', 'fullname': 'Thallium'},
	'pb':{'symbol':'Pb', 'fullname': 'Lead'},
	'bi':{'symbol':'Bi', 'fullname': 'Bismuth'},
	'po':{'symbol':'Po', 'fullname': 'Polonium'},
	'at':{'symbol':'At', 'fullname': 'Astatine'},
	'rn':{'symbol':'Rn', 'fullname': 'Radon'},
	'fr':{'symbol':'Fr', 'fullname': 'Francium'},
	'ra':{'symbol':'Ra', 'fullname': 'Radium'},
	'ac':{'symbol':'Ac', 'fullname': 'Actinium'},
	'th':{'symbol':'Th', 'fullname': 'Thorium'},
	'pa':{'symbol':'Pa', 'fullname': 'Protactinium'},
	'u':{'symbol':'U', 'fullname': 'Uranium'},
	'np':{'symbol':'Np', 'fullname': 'Neptunium'},
	'pu':{'symbol':'Pu', 'fullname': 'Plutonium'},
	'am':{'symbol':'Am', 'fullname': 'Americium'},
	'cm':{'symbol':'Cm', 'fullname': 'Curium'},
	'bk':{'symbol':'Bk', 'fullname': 'Berkelium'},
	'cf':{'symbol':'Cf', 'fullname': 'Californium'},
	'es':{'symbol':'Es', 'fullname': 'Einsteinium'},
	'fm':{'symbol':'Fm', 'fullname': 'Fermium'},
	'md':{'symbol':'Md', 'fullname': 'Mendelevium'},
	'no':{'symbol':'No', 'fullname': 'Nobelium'},
	'lr':{'symbol':'Lr', 'fullname': 'Lawrencium'},
	'rf':{'symbol':'Rf', 'fullname': 'Rutherfordium'},
	'db':{'symbol':'Db', 'fullname': 'Dubnium'},
	'sg':{'symbol':'Sg', 'fullname': 'Seaborgium'},
	'bh':{'symbol':'Bh', 'fullname': 'Bohrium'},
	'hs':{'symbol':'Hs', 'fullname': 'Hassium'},
	'mt':{'symbol':'Mt', 'fullname': 'Meitnerium'},
	'uun':{'symbol':'Uun', 'fullname': 'Ununnilium'},
	'uuu':{'symbol':'Uuu', 'fullname': 'Unununium'},
	'uub':{'symbol':'Uub', 'fullname': 'Ununbium'},
	'uut':{'symbol':'Uut', 'fullname': 'Ununtrium'},
	'uuq':{'symbol':'Uuq', 'fullname': 'Ununquadium'},
	'uup':{'symbol':'Uup', 'fullname': 'Ununpentium'},
	'uuh':{'symbol':'Uuh', 'fullname': 'Ununhexium'},
	'uus':{'symbol':'Uus', 'fullname': 'Ununseptium'},
	'uuo':{'symbol':'Uuo', 'fullname': 'Ununoctium'}
}

module.exports = elements;