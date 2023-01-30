package simulations

import io.gatling.core.scenario.Simulation
import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.core.Predef.Simulation


class CSVFileReader extends Simulation{

  val httpConf = http.baseUrl("https://gorest.co.in/")
    .header("Accept","application/json")
    .header("content-type","application/json")
    .header("Authorization","Bearer 469dc46c06a83ab7f6a3c46fcde8a01af15b83088e4a51fe00bf1bfa6d76b26b")

  val csvFeeder = csv("./src/test/resources/data/getUser.csv").circular

  def reedCsvFileData()= {
    repeat(9) {
      feed(csvFeeder)
        .exec(http("to read data from csv file")
          .get("public-api/users/${userid}")
          .check(jsonPath("$.data.name").is("${name}"))

        )
    }
  }

  val scn = scenario("to get data from csv feeder")
    .exec(reedCsvFileData())

  setUp(scn.inject(atOnceUsers(1))).protocols(httpConf)
}
