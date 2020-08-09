import deepmerge from 'deepmerge';
import defaultReactPreset = require('../react/jest-preset');
import defaultTsAndBabelPreset = require('../typescript-and-babel/jest-preset');

export = deepmerge(defaultReactPreset, defaultTsAndBabelPreset);
