var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "200",
        "ok": "200",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "312",
        "ok": "312",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1068",
        "ok": "1068",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "487",
        "ok": "487",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "176",
        "ok": "176",
        "ko": "-"
    },
    "percentiles1": {
        "total": "436",
        "ok": "436",
        "ko": "-"
    },
    "percentiles2": {
        "total": "574",
        "ok": "574",
        "ko": "-"
    },
    "percentiles3": {
        "total": "789",
        "ok": "789",
        "ko": "-"
    },
    "percentiles4": {
        "total": "909",
        "ok": "909",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 191,
    "percentage": 96
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 9,
    "percentage": 5
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "22.222",
        "ok": "22.222",
        "ko": "-"
    }
},
contents: {
"req_update-user-a0386": {
        type: "REQUEST",
        name: "update user",
path: "update user",
pathFormatted: "req_update-user-a0386",
stats: {
    "name": "update user",
    "numberOfRequests": {
        "total": "100",
        "ok": "100",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "496",
        "ok": "496",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1068",
        "ok": "1068",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "639",
        "ok": "639",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "127",
        "ok": "127",
        "ko": "-"
    },
    "percentiles1": {
        "total": "574",
        "ok": "574",
        "ko": "-"
    },
    "percentiles2": {
        "total": "758",
        "ok": "758",
        "ko": "-"
    },
    "percentiles3": {
        "total": "804",
        "ok": "804",
        "ko": "-"
    },
    "percentiles4": {
        "total": "988",
        "ok": "988",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 91,
    "percentage": 91
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 9,
    "percentage": 9
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "11.111",
        "ok": "11.111",
        "ko": "-"
    }
}
    },"req_delete-user-d4fd2": {
        type: "REQUEST",
        name: "delete user",
path: "delete user",
pathFormatted: "req_delete-user-d4fd2",
stats: {
    "name": "delete user",
    "numberOfRequests": {
        "total": "100",
        "ok": "100",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "312",
        "ok": "312",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "376",
        "ok": "376",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "336",
        "ok": "336",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "13",
        "ok": "13",
        "ko": "-"
    },
    "percentiles1": {
        "total": "335",
        "ok": "335",
        "ko": "-"
    },
    "percentiles2": {
        "total": "343",
        "ok": "343",
        "ko": "-"
    },
    "percentiles3": {
        "total": "359",
        "ok": "359",
        "ko": "-"
    },
    "percentiles4": {
        "total": "372",
        "ok": "372",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 100,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "11.111",
        "ok": "11.111",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
