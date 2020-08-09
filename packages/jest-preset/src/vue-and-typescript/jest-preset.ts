import deepmerge from 'deepmerge';
import defaultVuePreset = require('../vue/jest-preset');
import defaultTsAndBabelPreset = require('../typescript-and-babel/jest-preset');

export = deepmerge(defaultVuePreset, defaultTsAndBabelPreset);
