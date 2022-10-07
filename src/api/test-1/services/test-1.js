'use strict';

/**
 * test-1 service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::test-1.test-1');
