const draw = require("../common/draw.js");

const constants = {};

constants.DATA_DIR = "../data";
constants.RAW_DIR = constants.DATA_DIR + "/raw";
constants.DATASET_DIR = constants.DATA_DIR + "/dataset";
constants.JSON_DIR = constants.DATASET_DIR + "/json";
constants.IMG_DIR = constants.IMG_DIR + "/img";
constants.SAMPLES = constants.DATASET_DIR + "/samples.json";

const fs = require("fs");

const fileNames = fs.readdirSync(constants.RAW_DIR);
const samples = [];
let id = 1;
fileNames.forEach((fn) => {
  const content = fs.readFileSync(constants.RAW_DIR + "/" + fn);
  const { session, student, drawings } = JSON.parse(content);
  for (let label in drawings) {
    samples.push({
      id,
      label,
      student_name: student,
      student_id: session,
    });

    const paths = drawings[label];
    fs.writeFileSync(
      constants.JSON_DIR + "/" + id + ".json",
      JSON.stringify(drawings[paths])
    );

    generateImageFile(constants.IMG_DIR + "/" + id + ".png", paths);
    id++;
  }
});

fs.writeFileSync(constants.SAMPLES, JSON.stringify(samples));

function generateImageFile(outFile, paths) {
  draw.paths(ctx, paths);

  const buffer = canvas.toBuffer("image/png");
  fs.writeFileSync(outFile, buffer);
}
