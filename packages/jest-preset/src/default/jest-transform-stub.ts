import path from 'path';

export = {
  process(_: unknown, filename: string): string {
    return `module.exports = ${JSON.stringify(path.basename(filename))};`;
  },
};
