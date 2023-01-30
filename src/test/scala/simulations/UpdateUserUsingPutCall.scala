package simulations

import io.gatling.core.scenario.Simulation
import io.gatling.core.Predef._
import io.gatling.http.Predef._


class UpdateUserUsingPutCall extends Simulation{

    val  httpConf = http.baseUrl("https://reqres.in/")
      http.header("Accept","application/json")
      http.header("content-type","application/json")

    val scn = scenario("To update the user details")

      .exec(http(requestName = "update user")
        .put("api/users/2")
        .body(RawFileBody("./src/test/resources/payloads/UpdateUserDetails.json")).asJson //Convert Rawfile into the json format
        .check(status.in(200 to 210)))

      .pause(7)

        .exec(http("delete user")
          .delete("api/users/2")
          .check(status.in(200 to 210)))

    setUp(scn.inject(atOnceUsers(100))).protocols(httpConf)


}
