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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.UberAppMvpRegistrationAndLogin);
  }
}(this, function(expect, UberAppMvpRegistrationAndLogin) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new UberAppMvpRegistrationAndLogin.Driver1Api();
  });

  describe('(package)', function() {
    describe('Driver1Api', function() {
      describe('createDriver1', function() {
        it('should call createDriver1 successfully', function(done) {
          // TODO: uncomment, update parameter values for createDriver1 call
          /*
          var body = new UberAppMvpRegistrationAndLogin.Driver();
          body.username = "";
          body.password = "";
          body.email = "";
          body.firstName = "";
          body.lastName = "";
          body.phone = "";
          body.status = "pending";

          instance.createDriver1(body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('deleteDriver1', function() {
        it('should call deleteDriver1 successfully', function(done) {
          // TODO: uncomment, update parameter values for deleteDriver1 call
          /*
          var id = "id_example";

          instance.deleteDriver1(id, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getDriverById1', function() {
        it('should call getDriverById1 successfully', function(done) {
          // TODO: uncomment, update parameter values for getDriverById1 call and complete the assertions
          /*
          var id = 56;

          instance.getDriverById1(id, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(UberAppMvpRegistrationAndLogin.Driver);
            expect(data.username).to.be.a('string');
            expect(data.username).to.be("");
            expect(data.password).to.be.a('string');
            expect(data.password).to.be("");
            expect(data.email).to.be.a('string');
            expect(data.email).to.be("");
            expect(data.firstName).to.be.a('string');
            expect(data.firstName).to.be("");
            expect(data.lastName).to.be.a('string');
            expect(data.lastName).to.be("");
            expect(data.phone).to.be.a('string');
            expect(data.phone).to.be("");
            expect(data.status).to.be.a('string');
            expect(data.status).to.be("pending");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('updateDriver1', function() {
        it('should call updateDriver1 successfully', function(done) {
          // TODO: uncomment, update parameter values for updateDriver1 call
          /*
          var id = "id_example";
          var body = new UberAppMvpRegistrationAndLogin.Driver();
          body.username = "";
          body.password = "";
          body.email = "";
          body.firstName = "";
          body.lastName = "";
          body.phone = "";
          body.status = "pending";

          instance.updateDriver1(id, body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
