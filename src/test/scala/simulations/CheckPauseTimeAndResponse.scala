package simulations

import io.gatling.core.scenario.Simulation
import io.gatling.core.Predef._
import io.gatling.http.Predef._

class CheckPauseTimeAndResponse extends Simulation{

  val httpConf =http.baseUrl("https://reqres.in/")
  http.header("Accept","application/json")
  http.header(name="content-type","application/json")

  val scn = scenario("Users Api Test")
    .exec(http("List of users")
      .get("api/users?page=2")
      .check(status is 200))

  pause(4)

    .exec(http("Single user Api")
      .get("api/users/2").check(status is 200))

  setUp(scn.inject(atOnceUsers(100))).protocols(httpConf)

}
