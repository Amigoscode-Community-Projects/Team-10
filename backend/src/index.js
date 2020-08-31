/*
 * Uber App MVP - Registration and Login
 * An API for learning API first design approach
 *
 * OpenAPI spec version: 1.0.0
 * Contact: apiteam@swagger.io
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.15
 *
 * Do not edit the class manually.
 *
 */

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Companies', 'model/Company', 'model/Driver', 'model/Driver1', 'model/Drivers', 'model/Passenger', 'model/Passengers', 'model/User', 'api/CompanyApi', 'api/DriverApi', 'api/Driver1Api', 'api/PassengerApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/Companies'), require('./model/Company'), require('./model/Driver'), require('./model/Driver1'), require('./model/Drivers'), require('./model/Passenger'), require('./model/Passengers'), require('./model/User'), require('./api/CompanyApi'), require('./api/DriverApi'), require('./api/Driver1Api'), require('./api/PassengerApi'));
  }
}(function(ApiClient, Companies, Company, Driver, Driver1, Drivers, Passenger, Passengers, User, CompanyApi, DriverApi, Driver1Api, PassengerApi) {
  'use strict';

  /**
   * An_API_for_learning_API_first_design_approach.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var UberAppMvpRegistrationAndLogin = require('index'); // See note below*.
   * var xxxSvc = new UberAppMvpRegistrationAndLogin.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new UberAppMvpRegistrationAndLogin.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new UberAppMvpRegistrationAndLogin.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new UberAppMvpRegistrationAndLogin.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 1.0.0
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The Companies model constructor.
     * @property {module:model/Companies}
     */
    Companies: Companies,
    /**
     * The Company model constructor.
     * @property {module:model/Company}
     */
    Company: Company,
    /**
     * The Driver model constructor.
     * @property {module:model/Driver}
     */
    Driver: Driver,
    /**
     * The Driver1 model constructor.
     * @property {module:model/Driver1}
     */
    Driver1: Driver1,
    /**
     * The Drivers model constructor.
     * @property {module:model/Drivers}
     */
    Drivers: Drivers,
    /**
     * The Passenger model constructor.
     * @property {module:model/Passenger}
     */
    Passenger: Passenger,
    /**
     * The Passengers model constructor.
     * @property {module:model/Passengers}
     */
    Passengers: Passengers,
    /**
     * The User model constructor.
     * @property {module:model/User}
     */
    User: User,
    /**
     * The CompanyApi service constructor.
     * @property {module:api/CompanyApi}
     */
    CompanyApi: CompanyApi,
    /**
     * The DriverApi service constructor.
     * @property {module:api/DriverApi}
     */
    DriverApi: DriverApi,
    /**
     * The Driver1Api service constructor.
     * @property {module:api/Driver1Api}
     */
    Driver1Api: Driver1Api,
    /**
     * The PassengerApi service constructor.
     * @property {module:api/PassengerApi}
     */
    PassengerApi: PassengerApi
  };

  return exports;
}));