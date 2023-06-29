const constants = {};

constants.DATA_DIR = "../data";
constants.RAW_DIR = constants.DATA_DIR + "/raw";
constants.DATASET_DIR = constants.DATA_DIR + "/dataset";
constants.JSON_DIR = constants.DATASET_DIR + "/json";
constants.IMG_DIR = constants.IMG_DIR + "/img";
constants.SAMPLES = constants.DATASET_DIR + "/samples.json";

const fs = require("fs");

const fileName = fs.readdirSync(constants.RAW_DIR);
