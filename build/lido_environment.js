var lido_environment = function() {
    var e = {};
    e.name = "lido", e.id = "lido", e.title = "LIDO", e.version = "0.6", e.workflow = [], e.init = function() {};
    var n = function(e, n) {
            var r = t(e, n);
            return r.textContent.trim()
        },
        t = function(e, n) {
            for (var t = e, r = 0; r < n.length; r++) t = t.getElementsByTagName(n[r])[0];
            return t
        };
    return e.getIdentifiersFromDB = function(e) {
        getWithAJAX("http://dd-dariah.uni-koeln.de/exist/apps/wahn/oai-pmh.xql?verb=ListIdentifiers&metadataPrefix=lido", function(r) {
            var i = r.responseXML,
                a = t(i, ["OAI-PMH", "ListIdentifiers"]),
                o = map(a.children, function(e) {
                    return n(e, ["identifier"])
                });
            e(o)
        })
    }, e.showIdentifierSelect = function() {
        e.getIdentifiersFromDB(function(n) {
            APP.GUI.showSelectFrame(n, n, e.loadDocumentFromDB, "LIDO Documents in Database", void 0)
        })
    }, e.loadDocumentFromDB = function(n) {
        var r = "http://dd-dariah.uni-koeln.de/exist/apps/wahn/oai-pmh.xql?verb=GetRecord&identifier=" + n + "&metadataPrefix=lido";
        getWithAJAX(r, function(n) {
            var r = n.responseXML;
            log(r);
            t(r, ["OAI-PMH", "GetRecord", "record", "metadata", "lido"]);
            e.importLIDOXML(r), log("XML imported!")
        })
    }, e.importLIDOXML = function(n) {
        for (var t = function(e) {
                switch (e) {
                    case "300007122":
                        return "Bühnenmodell";
                    case "300026879":
                        return "Brief";
                    case "300028051":
                        return "Buch";
                    case "300047457":
                        return "Büste";
                    case "300128371":
                        return "Dia";
                    case "300136900":
                        return "Film";
                    case "300134997":
                        return "Filmfotografie";
                    case "300027221":
                        return "Filmplakat";
                    case "300026695":
                        return "Fotoalbum";
                    case "300127173":
                        return "Fotonegativ";
                    case "300033799":
                        return "Gemälde";
                    case "300211106":
                        return "Handpuppe";
                    case "300028571":
                        return "Handschrift";
                    case "300138191":
                        return "Inszenierungsfotografie";
                    case "300026424":
                        return "Libretti";
                    case "300211126":
                        return "Marionette";
                    case "300026427":
                        return "Noten";
                    case "300263033":
                        return "Papiertheater";
                    case "300138191":
                        return "Personenfotografie";
                    case "300264849":
                        return "Porträtgrafik";
                    case "300047090":
                        return "Porzellanfigur";
                    case "300026778":
                        return "Postkarte";
                    case "300027217":
                        return "Programmheft";
                    case "300054688":
                        return "Rezension";
                    case "300211230":
                        return "Schattenspielfigur";
                    case "300047600":
                        return "Statue";
                    case "300226128":
                        return "Stockpuppe";
                    case "300264849":
                        return "Szenische Grafik";
                    case "300138191":
                        return "Tanzfotografie";
                    case "300138191":
                        return "Theaterbaufotografie";
                    case "300264849":
                        return "Theaterbaugrafik";
                    case "300138758":
                        return "Theatermaske";
                    case "300027221":
                        return "Theaterplakat";
                    case "300027217":
                        return "Theaterzettel";
                    case "300047724":
                        return "Totenmaske";
                    case "300028577":
                        return "Typoskript";
                    case "300215389":
                        return "Zeitschrift";
                    case "300026867":
                        return "Zeitungsausschnitt";
                    case "300138191":
                        return "sonstige Fotografie";
                    case "300264849":
                        return "sonstige Grafik";
                    case "300047090":
                        return "sonstige Figur";
                    case "300138758":
                        return "sonstige Maske";
                    case "300047753":
                        return "sonstiges Modell";
                    default:
                        return ""
                }
            }, r = n.getElementsByTagName("lido"), i = r[0].getElementsByTagName("resourceSet"), a = new Array, o = 0; o < i.length; ++o) a[o] = {
            id: o,
            lastModified: "",
            name: i[o].getElementsByTagName("resourceRepresentation")[0].getElementsByTagName("linkResource")[0].firstChild.nodeValue,
            selected: !1,
            size: "",
            status: "stable",
            type: i[o].getElementsByTagName("resourceType")[0].getElementsByTagName("term")[0].firstChild.nodeValue
        };
        var s = {
            resources: {
                id_counter: 0,
                info: "ObjectList state",
                list: a,
                pointer: 0
            },
            start_form: {
                digitalisierungssignatur: {
                    digitalisierungssignatur: r[0].getElementsByTagName("lidoRecID")[0].firstChild.nodeValue
                },
                eintragsdokumentation: {
                    eintragsart: r[0].getElementsByTagName("category")[0].getElementsByTagName("term")[0].firstChild.nodeValue,
                    objektsignatur: r[0].getElementsByTagName("category")[0].getElementsByTagName("conceptID")[0].firstChild.nodeValue
                }
            }
        };
        log(s), e.workflow[0].recall(s);
        var l = r[0].getElementsByTagName("objectIdentificationWrap")[0],
            d = r[0].getElementsByTagName("objectClassificationWrap")[0],
            c = {
                beschreibung_form: {
                    objekt_identifikation: {
                        besitzende_institution: l.getElementsByTagName("legalBodyName")[0].getElementsByTagName("appellationValue")[0].firstChild.nodeValue,
                        inventarnummer: l.getElementsByTagName("repositorySet")[0].getElementsByTagName("workID")[0].firstChild.nodeValue,
                        "maße": l.getElementsByTagName("measurementsSet")[0].getElementsByTagName("measurementValue")[0].firstChild.nodeValue,
                        "maßeinheit": l.getElementsByTagName("measurementsSet")[0].getElementsByTagName("measurementUnit")[0].firstChild.nodeValue,
                        "maßtyp": l.getElementsByTagName("measurementsSet")[0].getElementsByTagName("measurementType")[0].firstChild.nodeValue,
                        objektbeschreibung: l.getElementsByTagName("objectDescriptionSet")[0].getElementsByTagName("descriptiveNoteValue")[0].firstChild.nodeValue,
                        standort_tws: l.getElementsByTagName("namePlaceSet")[0].getElementsByTagName("appellationValue")[0].firstChild.nodeValue,
                        titel: l.getElementsByTagName("titleSet")[0].getElementsByTagName("appellationValue")[0].firstChild.nodeValue
                    },
                    objektzuordnung: {
                        objektart: t(d.getElementsByTagName("objectWorkType")[0].getElementsByTagName("conceptID")[0].firstChild.nodeValue),
                        objektgattung: d.getElementsByTagName("objectWorkType")[0].getElementsByTagName("term")[0].firstChild.nodeValue,
                        thematik: {
                            thematik: r[0].getElementsByTagName("displaySubject")[0].firstChild.nodeValue
                        }
                    }
                }
            };
        log(c), e.workflow[1].recall(c);
        for (var m = r[0].getElementsByTagName("eventWrap")[0], u = m.getElementsByTagName("actorInRole"), f = new Array, o = 0; o < u.length; ++o) f[o] = {
            display_name: u[o].getElementsByTagName("nameActorSet")[0].getElementsByTagName("appellationValue")[0].firstChild.nodeValue,
            "function": u[o].getElementsByTagName("roleActor")[0].getElementsByTagName("term")[0].firstChild.nodeValue,
            geburtsjahr: u[o].getElementsByTagName("vitalDatesActor")[0].getElementsByTagName("earliestDate")[0].firstChild.nodeValue,
            geschlecht: u[o].getElementsByTagName("genderActor")[0].firstChild.nodeValue,
            id: o,
            name: u[o].getElementsByTagName("nameActorSet")[0].getElementsByTagName("appellationValue")[0].firstChild.nodeValue,
            pnd_id: u[o].getElementsByTagName("actor")[0].getElementsByTagName("actorID")[0].firstChild.nodeValue,
            sterbejahr: u[o].getElementsByTagName("vitalDatesActor")[0].getElementsByTagName("latestDate")[0].firstChild.nodeValue
        };
        var g = {
            herstellung_form: {
                culture: m.getElementsByTagName("culture")[0].getElementsByTagName("term")[0].firstChild.nodeValue,
                earliest_date: m.getElementsByTagName("eventDate")[0].getElementsByTagName("earliestDate")[0].firstChild.nodeValue,
                herstellungsbeschreibung: m.getElementsByTagName("displayEvent")[0].firstChild.nodeValue,
                latest_date: m.getElementsByTagName("eventDate")[0].getElementsByTagName("latestDate")[0].firstChild.nodeValue,
                ort: "Nicht in XML!"
            },
            persons: {
                id_counter: u.length,
                info: "ObjectList state",
                list: f,
                pointer: 0
            }
        };
        log(g), e.workflow[2].recall(g);
        for (var p = r[0].getElementsByTagName("eventWrap")[1], h = p.getElementsByTagName("actorInRole"), _ = new Array, o = 0; o < h.length; ++o) _[o] = {
            display_name: h[o].getElementsByTagName("nameActorSet")[0].getElementsByTagName("appellationValue")[0].firstChild.nodeValue,
            "function": h[o].getElementsByTagName("roleActor")[0].getElementsByTagName("term")[0].firstChild.nodeValue,
            geburtsjahr: h[o].getElementsByTagName("vitalDatesActor")[0].getElementsByTagName("earliestDate")[0].firstChild.nodeValue,
            geschlecht: h[o].getElementsByTagName("genderActor")[0].firstChild.nodeValue,
            id: o,
            name: h[o].getElementsByTagName("nameActorSet")[0].getElementsByTagName("appellationValue")[0].firstChild.nodeValue,
            pnd_id: h[o].getElementsByTagName("actor")[0].getElementsByTagName("actorID")[0].firstChild.nodeValue,
            sterbejahr: h[o].getElementsByTagName("vitalDatesActor")[0].getElementsByTagName("latestDate")[0].firstChild.nodeValue
        };
        var v = {
            inszenierung_form: {
                titel: r[0].getElementsByTagName("objectRelationWrap")[0].getElementsByTagName("eventName")[0].getElementsByTagName("appellationValue")[0].firstChild.nodeValue,
                culture: p.getElementsByTagName("culture")[0].getElementsByTagName("term")[0].firstChild.nodeValue,
                earliest_date: p.getElementsByTagName("eventDate")[0].getElementsByTagName("earliestDate")[0].firstChild.nodeValue,
                herstellungsbeschreibung: p.getElementsByTagName("displayEvent")[0].firstChild.nodeValue,
                latest_date: p.getElementsByTagName("eventDate")[0].getElementsByTagName("latestDate")[0].firstChild.nodeValue,
                ort: "Nicht in XML!"
            },
            persons: {
                id_counter: h.length,
                info: "ObjectList state",
                list: _,
                pointer: 0
            }
        };
        log(v), e.workflow[3].recall(v);
        for (var b = r[0].getElementsByTagName("eventWrap")[2], k = b.getElementsByTagName("actorInRole"), y = new Array, o = 0; o < k.length; ++o) y[o] = {
            display_name: k[o].getElementsByTagName("nameActorSet")[0].getElementsByTagName("appellationValue")[0].firstChild.nodeValue,
            "function": k[o].getElementsByTagName("roleActor")[0].getElementsByTagName("term")[0].firstChild.nodeValue,
            geburtsjahr: k[o].getElementsByTagName("vitalDatesActor")[0].getElementsByTagName("earliestDate")[0].firstChild.nodeValue,
            geschlecht: k[o].getElementsByTagName("genderActor")[0].firstChild.nodeValue,
            id: o,
            name: k[o].getElementsByTagName("nameActorSet")[0].getElementsByTagName("appellationValue")[0].firstChild.nodeValue,
            pnd_id: k[o].getElementsByTagName("actor")[0].getElementsByTagName("actorID")[0].firstChild.nodeValue,
            sterbejahr: k[o].getElementsByTagName("vitalDatesActor")[0].getElementsByTagName("latestDate")[0].firstChild.nodeValue
        };
        var g = {
            erwerb_form: {
                culture: b.getElementsByTagName("culture")[0].getElementsByTagName("term")[0].firstChild.nodeValue,
                earliest_date: b.getElementsByTagName("eventDate")[0].getElementsByTagName("earliestDate")[0].firstChild.nodeValue,
                provenienzbeschreibung: b.getElementsByTagName("displayEvent")[0].firstChild.nodeValue,
                latest_date: b.getElementsByTagName("eventDate")[0].getElementsByTagName("latestDate")[0].firstChild.nodeValue,
                ort: "Nicht in XML!"
            },
            persons: {
                id_counter: k.length,
                info: "ObjectList state",
                list: y,
                pointer: 0
            }
        };
        return log(g), e.workflow[4].recall(g), s
    }, e.settings = function() {
        return []
    }, e.recall = function(e) {}, e.getSaveData = function() {}, e.getProjectName = function() {
        return e.workflow[0].getSaveData().start_form.digitalisierungssignatur.digitalisierungssignatur
    }, e.reset = function() {
        e.workflow[0].reset(), e.workflow[1].reset(), e.workflow[2].reset(), e.workflow[3].reset(), e.workflow[4].reset()
    }, APP.environments.add(e), e
}();
lido_environment.lido_generator = function(e) {
    "use strict";
    var n = new XMLString;
    n.reset(), n.setElementPrefix("lido");
    var t = (lido_environment.workflow[0], function(e, t, r) {
            "search" == r ? n.element("term", e, [
                ["lido:addedSearchTerm", t]
            ]) : "lang" == r ? n.element("term", e, [
                ["xml:lang", t]
            ]) : "encoding" == r ? n.element("term", e, [
                ["lido:encodinganalog", t]
            ]) : "encoding_search" == r ? n.element("term", e, [
                ["lido:addedSearchTerm", t[0]],
                ["lido:encodinganalog", t[1]]
            ]) : n.element("term", e)
        }),
        r = function(e) {
            switch (e) {
                case "Bühnenmodell":
                    return "300007122";
                case "Brief":
                    return "300026879";
                case "Buch":
                    return "300028051";
                case "Büste":
                    return "300047457";
                case "Dia":
                    return "300128371";
                case "Film":
                    return "300136900";
                case "Filmfotografie":
                    return "300134997";
                case "Filmplakat":
                    return "300027221";
                case "Fotoalbum":
                    return "300026695";
                case "Fotonegativ":
                    return "300127173";
                case "Gemälde":
                    return "300033799";
                case "Handpuppe":
                    return "300211106";
                case "Handschrift":
                    return "300028571";
                case "Inszenierungsfotografie":
                    return "300138191";
                case "Libretti":
                    return "300026424";
                case "Marionette":
                    return "300211126";
                case "Noten":
                    return "300026427";
                case "Papiertheater":
                    return "300263033";
                case "Personenfotografie":
                    return "300138191";
                case "Porträtgrafik":
                    return "300264849";
                case "Porzellanfigur":
                    return "300047090";
                case "Postkarte":
                    return "300026778";
                case "Programmheft":
                    return "300027217";
                case "Rezension":
                    return "300054688";
                case "Schattenspielfigur":
                    return "300211230";
                case "Statue":
                    return "300047600";
                case "Stockpuppe":
                    return "300226128";
                case "Szenische Grafik":
                    return "300264849";
                case "Tanzfotografie":
                    return "300138191";
                case "Theaterbaufotografie":
                    return "300138191";
                case "Theaterbaugrafik":
                    return "300264849";
                case "Theatermaske":
                    return "300138758";
                case "Theaterplakat":
                    return "300027221";
                case "Theaterzettel":
                    return "300027217";
                case "Totenmaske":
                    return "300047724";
                case "Typoskript":
                    return "300028577";
                case "Zeitschrift":
                    return "300215389";
                case "Zeitungsausschnitt":
                    return "300026867";
                case "sonstige Fotografie":
                    return "300138191";
                case "sonstige Grafik":
                    return "300264849";
                case "sonstige Figur":
                    return "300047090";
                case "sonstige Maske":
                    return "300138758";
                case "sonstiges Modell":
                    return "300047753";
                default:
                    return ""
            }
        },
        i = function(e) {
            n.header(), n.open("lido", [
                ["xmlns:lido", "http://www.lido-schema.org"],
                ["xmlns:xsi", "http://www.w3.org/2001/XMLSchema-instance"],
                ["xsi:schemaLocation", "http://www.lido-schema.org http://www.lido-schema.org/schema/v1.0/lido-v1.0.xsd"]
            ]), n.element("lidoRecID", e.lido1.start_form.digitalisierungssignatur.digitalisierungssignatur, [
                ["lido:source", "Theaterwissenschaftliche Sammlung, Universität zu Köln"],
                ["lido:type", "local"]
            ]), n.open("category"), n.element("conceptID", e.lido1.start_form.eintragsdokumentation.objektsignatur, [
                ["lido:type", "AAT"]
            ]), t(e.lido1.start_form.eintragsdokumentation.eintragsart, "de", "lang"), n.close("category"), n.open("descriptiveMetadata"), n.open("objectClassificationWrap"), n.open("objectWorkTypeWrap"), n.open("objectWorkType"), n.element("conceptID", r(e.lido2.beschreibung_form.objektzuordnung.objektart), [
                ["lido:type", "AAT"]
            ]);
            var i = new Array("yes", r(e.lido2.beschreibung_form.objektzuordnung.objektart));
            t(e.lido2.beschreibung_form.objektzuordnung.objektgattung, i, "encoding_search"), n.close("objectWorkType"), n.close("objectWorkTypeWrap"), n.open("classificationWrap"), n.open("classification", [
                ["lido:type", "AAT:type"]
            ]), n.element("conceptID", r(e.lido2.beschreibung_form.objektzuordnung.objektart), [
                ["lido:type", "AAT:type"]
            ]), n.element("term", e.lido2.beschreibung_form.objektzuordnung.objektart, [
                ["lido:addedSearchTerm", "yes"]
            ]), n.close("classification"), n.close("classificationWrap"), n.close("objectClassificationWrap"), n.open("objectIdentificationWrap"), n.open("titleWrap"), n.open("titleSet"), n.element("appellationValue", e.lido2.beschreibung_form.objekt_identifikation.titel, [
                ["lido:pref", "preferred"],
                ["xml:lang", "de"]
            ]), n.close("titleSet"), n.close("titleWrap"), n.open("repositoryWrap"), n.open("repositorySet", [
                ["lido:type", "current"]
            ]), n.open("repositoryName"), n.open("legalBodyName"), n.element("appellationValue", e.lido2.beschreibung_form.objekt_identifikation.besitzende_institution), n.close("legalBodyName"), n.close("repositoryName"), n.open("repositoryLocation"), n.open("namePlaceSet"), n.element("appellationValue", e.lido2.beschreibung_form.objekt_identifikation.standort_tws), n.close("namePlaceSet"), n.close("repositoryLocation"), n.element("workID", e.lido2.beschreibung_form.objekt_identifikation.inventarnummer, [
                ["lido:type", "inventory number"]
            ]), n.close("repositorySet"), n.close("repositoryWrap"), n.open("objectDescriptionWrap"), n.open("objectDescriptionSet"), n.element("descriptiveNoteValue", e.lido2.beschreibung_form.objekt_identifikation.objektbeschreibung), n.close("objectDescriptionSet"), n.close("objectDescriptionWrap"), n.open("objectMeasurementsWrap"), n.open("objectMeasurementsSet"), n.open("objectMeasurements"), n.open("measurementsSet"), n.element("measurementType", e.lido2.beschreibung_form.objekt_identifikation.maßtyp), n.element("measurementUnit", e.lido2.beschreibung_form.objekt_identifikation.maßeinheit), n.element("measurementValue", e.lido2.beschreibung_form.objekt_identifikation.maße), n.close("measurementsSet"), n.close("objectMeasurements"), n.close("objectMeasurementsSet"), n.close("objectMeasurementsWrap"), n.close("objectIdentificationWrap"), n.open("eventWrap"), n.open("eventSet"), n.element("displayEvent", e.lido3.herstellung_form.herstellungsbeschreibung), n.open("event"), n.open("eventType"), t("Herstellung"), n.close("eventType"), n.open("eventActor"), forEach(e.lido3.persons.list, function(e) {
                n.open("actorInRole"), n.open("actor", [
                    ["lido:type", "person"]
                ]), n.element("actorID", e.pnd_id, [
                    ["lido:type", "d-nb.info"],
                    ["lido:source", "http://d-nb.info/gnd/" + e.pnd_id]
                ]), n.open("nameActorSet"), n.element("appellationValue", e.name, [
                    ["lido:pref", "preferred"]
                ]), n.close("nameActorSet"), n.open("vitalDatesActor"), n.element("earliestDate", e.geburtsjahr), n.element("latestDate", e.sterbejahr), n.close("vitalDatesActor"), n.element("genderActor", e.geschlecht), n.close("actor"), n.open("roleActor"), t(e["function"]), n.close("roleActor"), n.close("actorInRole")
            }), n.close("eventActor"), n.open("culture"), t(e.lido3.herstellung_form.culture), n.close("culture"), n.open("eventDate"), n.open("date"), n.element("earliestDate", e.lido3.herstellung_form.earliest_date), n.element("latestDate", e.lido3.herstellung_form.latest_date), n.close("date"), n.close("eventDate"), n.close("event"), n.close("eventSet"), n.close("eventWrap"), n.open("eventWrap"), n.open("eventSet"), n.element("displayEvent", e.lido4.inszenierung_form.performancebeschreibung), n.open("event"), n.open("eventType"), t("Performance"), n.close("eventType"), n.open("eventActor"), forEach(e.lido4.persons.list, function(e) {
                n.open("actorInRole"), n.open("actor", [
                    ["lido:type", "person"]
                ]), n.element("actorID", e.pnd_id, [
                    ["lido:type", "d-nb.info"],
                    ["lido:source", "http://d-nb.info/gnd/" + e.pnd_id]
                ]), n.open("nameActorSet"), n.element("appellationValue", e.name, [
                    ["lido:pref", "preferred"]
                ]), n.close("nameActorSet"), n.open("vitalDatesActor"), n.element("earliestDate", e.geburtsjahr), n.element("latestDate", e.sterbejahr), n.close("vitalDatesActor"), n.element("genderActor", e.geschlecht), n.close("actor"), n.open("roleActor"), t(e["function"]), n.close("roleActor"), n.close("actorInRole")
            }), n.close("eventActor"), n.open("culture"), t(e.lido4.inszenierung_form.culture), n.close("culture"), n.open("eventDate"), n.open("date"), n.element("earliestDate", e.lido4.inszenierung_form.earliest_date), n.element("latestDate", e.lido4.inszenierung_form.latest_date), n.close("date"), n.close("eventDate"), n.close("event"), n.close("eventSet"), n.close("eventWrap"), n.open("eventWrap"), n.open("eventSet"), n.element("displayEvent", e.lido5.erwerb_form.provenienzbeschreibung), n.open("event"), n.open("eventType"), t("Provenienz"), n.close("eventType"), n.open("eventActor"), forEach(e.lido5.persons.list, function(e) {
                n.open("actorInRole"), n.open("actor", [
                    ["lido:type", "person"]
                ]), n.element("actorID", e.pnd_id, [
                    ["lido:type", "d-nb.info"],
                    ["lido:source", "http://d-nb.info/gnd/" + e.pnd_id]
                ]), n.open("nameActorSet"), n.element("appellationValue", e.name, [
                    ["lido:pref", "preferred"]
                ]), n.close("nameActorSet"), n.open("vitalDatesActor"), n.element("earliestDate", e.geburtsjahr), n.element("latestDate", e.sterbejahr), n.close("vitalDatesActor"), n.element("genderActor", e.geschlecht), n.close("actor"), n.open("roleActor"), t(e["function"]), n.close("roleActor"), n.close("actorInRole")
            }), n.close("eventActor"), n.open("culture"), t(e.lido5.erwerb_form.culture), n.close("culture"), n.open("eventDate"), n.open("date"), n.element("earliestDate", e.lido5.erwerb_form.earliest_date), n.element("latestDate", e.lido5.erwerb_form.latest_date), n.close("date"), n.close("eventDate"), n.close("event"), n.close("eventSet"), n.close("eventWrap"), n.open("objectRelationWrap"), n.open("subjectWrap"), n.open("subjectSet"), n.element("displaySubject", e.lido2.beschreibung_form.objektzuordnung.thematik.thematik), n.open("subject"), n.open("subjectDate"), n.element("displayDate", e.lido4.inszenierung_form.earliest_date + "[frühestens] - " + e.lido4.inszenierung_form.latest_date + "[spätestens]"), n.close("subjectDate"), n.open("subjectEvent"), n.element("displayEvent", e.lido4.inszenierung_form.performancebeschreibung), n.open("event"), n.open("eventType"), t("Herstellung"), t("Inszenierung"), t("Erwerb"), n.close("eventType"), n.open("eventName"), n.element("appellationValue", e.lido4.inszenierung_form.titel), n.close("eventName"), forEach(e.lido4.persons.list, function(e) {
                n.open("eventActor"), n.element("displayActorInRole", "AkteurIn " + e["function"]), n.open("actorInRole"), n.open("actor"), n.open("nameActorSet"), n.element("appellationValue", e.name), n.close("nameActorSet"), n.close("actor"), n.open("roleActor"), t(e["function"]), n.close("roleActor"), n.close("actorInRole"), n.close("eventActor")
            }), n.open("culture"), t(e.lido4.inszenierung_form.culture), n.close("culture"), n.open("eventDate"), n.open("date"), n.element("earliestDate", e.lido4.inszenierung_form.earliest_date), n.element("latestDate", e.lido4.inszenierung_form.latest_date), n.close("date"), n.close("eventDate"), n.close("event"), n.close("subjectEvent"), n.close("subject"), n.close("subjectSet"), n.close("subjectWrap"), n.close("objectRelationWrap"), n.close("descriptiveMetadata"), n.open("administrativeMetadata", [
                ["xml:lang", "de"]
            ]), n.open("recordWrap"), n.element("recordID", e.lido1.start_form.eintragsdokumentation.objektsignatur, [
                ["lido:type", "local"]
            ]), n.open("recordType"), n.element("term", e.lido1.start_form.eintragsdokumentation.eintragsart), n.close("recordType"), n.open("recordSource"), n.open("legalBodyName"), n.element("appellationValue", "Theaterwissenschaftliche Sammlung, Universität zu Köln"), n.close("legalBodyName"), n.close("recordSource"), n.close("recordWrap"), forEach(e.lido1.resources.list, function(e) {
                n.open("resourceWrap"), n.open("resourceSet"), n.element("resourceID", e.name, [
                    ["lido:type", "local"]
                ]), n.open("resourceRepresentation"), n.element("linkResource", e.name), n.close("resourceRepresentation"), n.open("resourceType"), n.element("term", e.type), n.close("resourceType"), n.open("resourceSource"), n.open("legalBodyName"), n.element("appellationValue", "Theaterwissenschaftliche Sammlung, Universität zu Köln"), n.close("legalBodyName"), n.close("resourceSource"), n.close("resourceSet"), n.close("resourceWrap")
            }), n.close("administrativeMetadata"), n.close("lido")
        };
    return console.log(e), i(e), n.getString()
}, lido_environment.forms = {}, lido_environment.forms.start = {
    name: "start",
    type: "form",
    fields: [{
        type: "subarea",
        heading: "Digitalisierungssignatur",
        name: "digitalisierungssignatur",
        fields: [{
            heading: void 0,
            name: "digitalisierungssignatur",
            type: "text",
            default_value: "TWS_",
            comment: "DIESER EINTRAG DARF NUR IN ABSPRACHE MIT NORA PROBST VORGENOMMEN WERDEN; diese Signatur ist angelehnt an den Dateinamen des Digitalisats; WICHTIG: diese Signatur beginnt immer zuerst mit den drei Buchstaben “TWS”, dann kommt ein Unterstrich “_” und dann eine Buchstabenkombination, die die Abteilung innerhalb der TWS bezeichnet (BEISPIELE: TWS_FIN00327; TWS_FGL00542: TWS_G0148902)"
        }]
    }, {
        type: "subarea",
        heading: "Eintragsdokumentation",
        name: "eintragsdokumentation",
        fields: [{
            heading: "Eintragsart",
            name: "eintragsart",
            type: "open_vocabulary",
            vocabulary: ["Einzelobjekt", "Konvolut"],
            default_value: "Einzelobjekt",
            comment: "Handelt es sich um EIN Objekt oder ein OBJEKTSAMMLUNG? Wenn möglich, sollten die Objekte als Einzelobjekte erschlossen werden (BEISPIELE für Einzelobjekt: eine Maske, ein Bühnenbildentwurf, eine Fotografie; BEISPIELE für ein Konvolut: ein Fotoalbum mit mehreren Fotos oder eine Nachlass-Box mit mehreren Einzelobjekten)"
        }, {
            heading: "Objektsignatur",
            name: "objektsignatur",
            type: "text",
            comment: "Hier bitte die bereits bestehende Signatur des Objekts eintragen (BEISPIELE: z.B. AU9821 bei Autografen; z.B. G32906 bei Bühnenbildentwürfen; z.B. L342 bei Libretti u.s.w.)"
        }]
    }]
}, lido_environment.forms.objektbeschreibung = {
    name: "objektbeschreibung",
    type: "form",
    fields: [{
        type: "column",
        title: "Objektbeschreibung",
        name: "objekt_identifikation",
        fields: [{
            heading: "Titel",
            name: "titel",
            type: "text",
            comment: "Titel des Objekts (BEISPIELE: Schattenspielfigur Hacivat des Karagöz; Parsifal, Modell; Radiozauberer, Der); wenn Inszenierungsbezug, dann hier den vollständigen deutschen Titel eintragen (auch bei Opern den deutschen Titel nehmen, nicht den italienischen); keine Kurztitel verwenden; ggf. sollte man den Titel online nochmal recherchieren; die Artikel am Ende platzieren: Der, Die, Das / Ein, Einer (BEISPIELE: „Vetter aus Dingsda, Der“; „Wintermärchen, Ein“; „Räuber, Die“)"
        }, {
            heading: "Objektbeschreibung",
            name: "objektbeschreibung",
            type: "textarea",
            comment: "FREITEXTFELD; keine inhaltlichen Angaben, sondern Beschreibung des Objekts, d.h. des Materials, des Erhaltungszustands, Beschreibung von etwaig vorhandenen Inschriften; es geht nicht so sehr um den Bildinhalt, sondern um die formale Beschreibung des Objektzustands (BEISPIELE: alt-ägyptische Schattenspielfigur aus Leder mit transparenten Farbfeldern, leichte Beschädigung oben links ODER Schwarz-Weiß-Fotografie einer Faust-Inszenierung, Gelatinesilber, Beschriftung auf der Rückseite: Gustaf Gründgens als Mephisto, Willi Quadflieg als Faust ODER grafischer Entwurf, Tusche und Wasserfarben, Einstichlöcher in den Ecken)"
        }, {
            heading: "Maße",
            name: "maße",
            type: "text",
            comment: "Höhe x Breite x Tiefe; Eingabe ohne Leerzeichen (BEISPIELE: 24x18; 105x47x39; 9,5x7,5)"
        }, {
            heading: "Maßeinheit",
            name: "maßeinheit",
            type: "text",
            default_value: "cm"
        }, {
            heading: "Maßtyp",
            name: "maßtyp",
            type: "text",
            default_value: "HxBxT"
        }, {
            heading: "Inventarnummer",
            name: "inventarnummer",
            type: "text",
            comment: "Hier die Inventarnummer des Objekts eintragen: zuerst “INV.” und dann eine Nummer (BEISPIELE: Inv.5032; Inv. 10983; …)"
        }, {
            heading: "Besitzende Institution",
            name: "besitzende_institution",
            type: "text",
            default_value: "Theaterwissenschaftliche Sammlung, Universität zu Köln"
        }, {
            heading: "Standort in der TWS",
            name: "standort_tws",
            type: "open_vocabulary",
            vocabulary: ["Autografensammlung", "Bibliothek", "Büsten und Statuetten", "Druckgrafik", "Filmarchiv", "Fotoabteilung", "obere Grafik", "untere Grafik", "Hänneschen-Sammlung", "Kriegstheaterarchiv", "Kritikenabteilung", "Programmheftabteilung", "Puppensammlung", "Rara", "Schattenspielsammlung", "Zeitschriften"]
        }]
    }, {
        type: "column",
        title: "Objekt-Zuordnung",
        name: "objektzuordnung",
        fields: [{
            heading: "Objektgattung",
            name: "objektgattung",
            type: "open_vocabulary",
            vocabulary: ["Bild", "Figur", "Maske", "Modell", "Schrift"]
        }, {
            heading: "Objektart",
            name: "objektart",
            type: "open_vocabulary",
            vocabulary: ["Bühnenmodell", "Brief", "Buch", "Büste", "Dia", "Film", "Filmfotografie", "Filmplakat", "Fotoalbum", "Fotonegativ", "Gemälde", "Handpuppe", "Handschrift", "Inszenierungsfotografie", "Libretti", "Marionette", "Noten", "Papiertheater", "Personenfotografie", "Postkarte", "Porträtgrafik", "Porzellanfigur", "Programmheft", "Rezension", "Schattenspielfigur", "Statue", "Stockpuppe", "Szenische Grafik", "Tanzfotografie", "Theaterbaufotografie", "Theaterbaugrafik", "Theatermaske", "Theaterplakat", "Theaterzettel", "Totenmaske", "Typoskript", "Zeitschrift", "Zeitungsausschnitt", "Sonstige Fotografie"]
        }, {
            type: "subarea",
            heading: "Thematik / Bildinhalt / Abgebildete Person",
            name: "thematik",
            fields: [{
                heading: "Thematik",
                name: "thematik",
                type: "textarea",
                comment: "FREITEXTFELD; inhaltliche Bildbeschreibung; worum geht es inhaltlich? Was ist zu sehen? Schlagworte vergeben ( z.B. Thingspiel, Tanztheater, Stummfilm, ...); dargestellte Szene? Inszenierung? dargestellte Charaktere? Namen der abgebildeten Personen? BEISPIELE: Uraufführung von Wagners Parsifal, zu sehen ist das Bühnenbild zum 1. Akt, 3. Szene; Spielfigur Wayang Golek; Portrait von Hansgünther Heyme"
            }]
        }]
    }]
}, lido_environment.forms.herstellung = {
    name: "herstellung",
    title: "Herstellung des Objekts",
    type: "form",
    fields: [{
        heading: "Herstellungsbeschreibung",
        name: "herstellungsbeschreibung",
        type: "textarea",
        comment: "FREITEXTFELD: Beschreibung der Herstellung (BEISPIEL: Bühnenbildentwurf ausgeführt im Auftrag von Richard Wagner; Fotografie aufgenommen  im Fotostudio (nicht auf der Bühne); …)"
    }, {
        heading: "Ort",
        name: "ort",
        type: "text",
        comment: "Ort der Herstellung; idealerweise hier den Städtenamen in dt. Sprache eintragen (ansonsten das Land); wenn nur die Region bekannt ist, dann diese in das Feld ‚kultureller Kontext‘ eintragen; wenn Ort unbekannt, dann leer lassen"
    }, {
        heading: "Jahr (frühestes)",
        name: "earliest_date",
        type: "text",
        comment: "frühestes/ spätestes sollte einen Zeitraum angeben, in welchem das Objekt entstanden ist; bei bekannter Jahreszahl, diese in beide Felder (frühestes und spätestes) eintragen; das Jahr der Herstellung kann auch geschätzt werden (BEISPIEL: wenn keinerlei Indizien vorliegen, kann den Zeitraum auch wiefolgt eingegrenzt werden: Lebenszeit des Künstlers/der Künstlerin; bei Fotografie aus dem Kriegstheater des 1. Weltkriegs liegt das Jahr zwischen 1914 und 1918; usw.)"
    }, {
        heading: "Jahr (spätestes)",
        name: "latest_date",
        type: "text",
        comment: "frühestes/ spätestes sollte einen Zeitraum angeben, in welchem das Objekt entstanden ist; bei bekannter Jahreszahl, diese in beide Felder (frühestes und spätestes) eintragen; das Jahr der Herstellung kann auch geschätzt werden (BEISPIEL: wenn keinerlei Indizien vorliegen, kann den Zeitraum auch wiefolgt eingegrenzt werden: Lebenszeit des Künstlers/der Künstlerin; bei Fotografie aus dem Kriegstheater des 1. Weltkriegs liegt das Jahr zwischen 1914 und 1918; usw.)"
    }, {
        heading: "Kultureller Kontext",
        name: "culture",
        type: "text",
        comment: "Kultureller Kontext der UrheberIn (BEISPIELE: China; Europa; Ost-Asien; Ost-Europa; Arabischer Raum; Süddeutschland; Rheinland; …)"
    }]
}, lido_environment.forms.actor_herstellung = {
    name: "actor",
    type: "form",
    fields: [{
        name: "name",
        heading: "Name (Name, Vorname)",
        type: "text",
        comment: "erst Nachname, dann Vorname; bei mittelalterlichen Personen oder dem Hochadel den Vornamen (BEISPIELE: Georg II.; Walter von der Vogelweide; Wolfram von Eschenbach); Namen mit “von” oder “zu” oder “van der” erst nach dem Vornamen (BEISPIELE: Goethe, Johann Wolfgang von; Velde, Henry van der; Kleist, Heinrich von)"
    }, {
        name: "function",
        heading: "Funktion",
        type: "open_vocabulary",
        vocabulary: ["BildhauerIn", "BühnenbildnerIn", "FotografIn", "KomponistIn", "KünstlerIn", "MalerIn", "ErstellerIn des Konvoluts", "VerfasserIn"],
        default_value: "BildhauerIn"
    }, {
        name: "pnd_id",
        heading: "AkteurIn ID (PNG)",
        type: "text",
        comment: "muss nicht ausgefüllt werden (Recherche der ID kann unter https://portal.dnb.de/opac.htm?method=showSearchForm#top durchgeführt werden); BEISPIELE: 115810757, 1052161499)"
    }, {
        name: "geburtsjahr",
        heading: "Geburtsjahr",
        type: "text",
        comment: "JJJJ (BEISPIELE: 1984; 1843)"
    }, {
        name: "sterbejahr",
        heading: "Sterbejahr",
        type: "text",
        comment: "JJJJ (BEISPIELE: 1991; 1873)"
    }, {
        name: "geschlecht",
        heading: "Geschlecht",
        type: "select",
        vocabulary: ["male", "female", "other"]
    }]
}, lido_environment.forms.inszenierung = {
    name: "inszenierung",
    title: "Inszenierung / Performance",
    type: "form",
    fields: [{
        name: "titel",
        heading: "Titel",
        type: "text",
        comment: "Titel der Inszenierung / Performance; wenn Inszenierungsbezug, dann hier den vollständigen deutschen Titel eintragen (auch bei Opern den deutschen Titel nehmen, nicht den italienischen); keine Kurztitel verwenden; ggf. sollte man den Titel online nochmal recherchieren; die Artikel am Ende platzieren: Der, Die, Das / Ein, Einer (BEISPIELE: „Vetter aus Dingsda, Der“; „Wintermärchen, Ein“; „Räuber, Die“); hier darf u.U. auch die Spieltradition eingetragen werden (BEISPIELE: Karagöz; Wayang; Fasching; Karnevalsumzug; Passionsspiele; …)"
    }, {
        heading: "Performance-Beschreibung",
        name: "performancebeschreibung",
        type: "textarea",
        comment: "FREITEXT; wenn möglich, Angaben zu Premiere/ Erstaufführung/ Theaterfestival/ Rahmen der Inszenierung etc., hier das konkrete Theater/die Spielstätte angeben; Beschreibung der Art der Performance (BEISPIELE: indischer Kathakali-Tanz; Performance des Kollektivs SheShePop; Operninszenierung; Freilichttheaterinszenierung, …)"
    }, {
        heading: "Ort",
        name: "ort",
        type: "text",
        comment: "Ort der Performance; idealerweise hier den Städtenamen in dt. Sprache eintragen (ansonsten das Land); wenn nur die Region bekannt ist, dann diese in das Feld ‚kultureller Kontext‘ eintragen; wenn Ort unbekannt, dann leer lassen"
    }, {
        heading: "Jahr (frühestes)",
        name: "earliest_date",
        type: "text",
        comment: "frühestes/ spätestes sollte einen Zeitraum angeben, in welchem die Inszenierung/die Performance stattgefunden hat; bei bekannter Jahreszahl, diese in beide Felder (frühestes und spätestes) eintragen; das Jahr der Inszenierung kann auch geschätzt werden (BEISPIEL: wenn keinerlei Indizien vorliegen, kann den Zeitraum auch wiefolgt eingegrenzt werden: Lebenszeit der Regisseurin/des Regisseurs; Bezugnahme auf ein historisches Ereignis, z.B. Mauerfall = nach 1989)"
    }, {
        heading: "Jahr (spätestes)",
        name: "latest_date",
        type: "text",
        comment: "frühestes/ spätestes sollte einen Zeitraum angeben, in welchem die Inszenierung/die Performance stattgefunden hat; bei bekannter Jahreszahl, diese in beide Felder (frühestes und spätestes) eintragen; das Jahr der Inszenierung kann auch geschätzt werden (BEISPIEL: wenn keinerlei Indizien vorliegen, kann den Zeitraum auch wiefolgt eingegrenzt werden: Lebenszeit der Regisseurin/des Regisseurs; Bezugnahme auf ein historisches Ereignis, z.B. Mauerfall = nach 1989)"
    }, {
        heading: "Kultureller Kontext",
        name: "culture",
        type: "text",
        comment: "Kultureller Kontext der Performance / Inszenierung: wenn die Performance in Köln stattfand, dann “Rheinland” – egal ob die Performance türkisches Karagöz oder ähnliches beinhaltet; hier ausschließlich den kulturellen Kontext der Performance eintragen (BEISPIELE: China; Europa; Ost-Asien; Ost-Europa; Arabischer Raum; Süddeutschland; Rheinland; …)"
    }]
}, lido_environment.forms.actor_inszenierung = {
    name: "actor",
    type: "form",
    fields: [{
        name: "name",
        heading: "Name (Name, Vorname)",
        type: "text",
        comment: "erst Nachname, dann Vorname; bei mittelalterlichen Personen oder dem Hochadel den Vornamen (BEISPIELE: Georg II.; Walter von der Vogelweide; Wolfram von Eschenbach); Namen mit “von” oder “zu” oder “van der” erst nach dem Vornamen (BEISPIELE: Goethe, Johann Wolfgang von; Velde, Henry van der; Kleist, Heinrich von)"
    }, {
        name: "function",
        heading: "Funktion",
        type: "open_vocabulary",
        vocabulary: ["AutorIn des inszenierten Werks", "BühnenbildnerIn der Inszenierung", "ChoreographIn des inszenierten Werks", "DarstellerIn der Inszenierung", "DrehbuchautorIn des Films", "KomponistIn des inszenierten Werks", "Konzeptionierung", "RegisseurIn des inszenierten Werks"],
        default_value: "AutorIn des inszenierten Werks"
    }, {
        name: "pnd_id",
        heading: "AkteurIn ID (PNG)",
        type: "text",
        comment: "muss nicht ausgefüllt werden (Recherche der ID kann unter https://portal.dnb.de/opac.htm?method=showSearchForm#top durchgeführt werden); BEISPIELE: 115810757, 1052161499)"
    }, {
        name: "geburtsjahr",
        heading: "Geburtsjahr",
        type: "text",
        comment: "JJJJ (BEISPIELE: 1984; 1843)"
    }, {
        name: "sterbejahr",
        heading: "Sterbejahr",
        type: "text",
        comment: "JJJJ (BEISPIELE: 1991; 1873)"
    }, {
        name: "geschlecht",
        heading: "Geschlecht",
        type: "select",
        vocabulary: ["male", "female", "other"]
    }]
}, lido_environment.forms.erwerb = {
    name: "erwerb",
    title: "Provenienz / Erwerb",
    type: "form",
    fields: [{
        heading: "Provenienzbeschreibung",
        name: "provenienzbeschreibung",
        type: "textarea",
        comment: "FREITEXT; Beschreibung, wie das Objekt in den Bestand der TWS gelangt ist; wie viel wurde beim Erwerb bezahlt? Was sind die Quellen für die hier angegebenen Fakten? BEISPIELE: Niessen kaufte das Gemälde 1925 in Berlin vom Antiquariat Müller für 60 Mk. (vgl. Rechnung im NL Niessen im Korrespondenzordner „M“); Max Martersteig stiftete diese Figurine 1925 dem Kölner Institut (vgl. Brief von Martersteig an Niessen, Signatur: AU4962; die vorliegende Kritik ist Teil der Sammlung Hagen, die in den 1920er Jahren geschlossen in den Bestand der TWS überging)"
    }, {
        heading: "Ort",
        name: "ort",
        type: "text",
        comment: "Ort des Erwerbs durch die TWS; idealerweise hier den Städtenamen in dt. Sprache eintragen (ansonsten das Land); wenn nur die Region bekannt ist, dann diese in das Feld ‚kultureller Kontext‘ eintragen; wenn Ort unbekannt, dann leer lassen"
    }, {
        heading: "Jahr (frühestes)",
        name: "earliest_date",
        type: "text",
        comment: "Datum des Erwerbs des Objekts durch die TWS; wenn das Jahr bekannt ist, dann in “frühestes Datum” und “spätestes Datum” die gleiche Jahreszahl eintragen; wenn das Datum unbekannt ist, dann leer lassen"
    }, {
        heading: "Jahr (spätestes)",
        name: "latest_date",
        type: "text",
        comment: "Datum des Erwerbs des Objekts durch die TWS; wenn das Jahr bekannt ist, dann in “frühestes Datum” und “spätestes Datum” die gleiche Jahreszahl eintragen; wenn das Datum unbekannt ist, dann leer lassen"
    }, {
        heading: "Kultureller Kontext",
        name: "culture",
        type: "text",
        comment: "Kultureller Kontext des Erwerbs:  (BEISPIELE: China; Europa; Ost-Asien; Ost-Europa; Arabischer Raum; Süddeutschland; Rheinland; …)"
    }]
}, lido_environment.forms.actor_erwerb = {
    name: "actor",
    type: "form",
    fields: [{
        name: "name",
        heading: "Name (Name, Vorname)",
        type: "text",
        comment: "erst Nachname, dann Vorname; bei mittelalterlichen Personen oder dem Hochadel den Vornamen (BEISPIELE: Georg II.; Walter von der Vogelweide; Wolfram von Eschenbach); Namen mit “von” oder “zu” oder “van der” erst nach dem Vornamen (BEISPIELE: Goethe, Johann Wolfgang von; Velde, Henry van der; Kleist, Heinrich von)"
    }, {
        name: "function",
        heading: "Funktion",
        type: "open_vocabulary",
        vocabulary: ["KäuferIn", "NachlasserIn", "StifterIn", "VerkäuferIn", "VermittlerIn", "VorbesitzerIn"],
        default_value: "KäuferIn"
    }, {
        name: "pnd_id",
        heading: "AkteurIn ID (PNG)",
        type: "text",
        comment: "muss nicht ausgefüllt werden (Recherche der ID kann unter https://portal.dnb.de/opac.htm?method=showSearchForm#top durchgeführt werden); BEISPIELE: 115810757, 1052161499)"
    }, {
        name: "geburtsjahr",
        heading: "Geburtsjahr",
        type: "text",
        comment: "JJJJ (BEISPIELE: 1984; 1843)"
    }, {
        name: "sterbejahr",
        heading: "Sterbejahr",
        type: "text",
        comment: "JJJJ (BEISPIELE: 1991; 1873)"
    }, {
        name: "geschlecht",
        heading: "Geschlecht",
        type: "select",
        vocabulary: ["male", "female", "other"]
    }]
}, lido_environment.workflow[0] = function() {
    "use strict";
    var e, n = {};
    return n.parent = lido_environment, n.l = n.parent.l, n.fileSelection = void 0, n.resources = new ObjectList, n.identity = {
        id: "lido1",
        title: "Start: Objektidentifikation",
        icon: "shapes"
    }, n.view_id = "VIEW_lido1", n.substitute_for_bad_chars = "_", n.init = function(e) {
        var t = dom.make("div", "files", "", e);
        dom.a(t, "", "", void 0, "Load a document from the database.", function() {
            n.parent.showIdentifierSelect()
        }), APP.forms.make(t, lido_environment.forms.start, "start_form_", "", void 0, void 0), dom.h3(t, "Dateien importieren"); {
            var r = (APP.GUI.FORMS.fileDropZone(t, "drop_zone", n.pushFileMetadata), dom.make("div", "", "workspace-usageTable", t, "<h3>Benutzung</h3><h4>Klick</h4><p>Datei wird ausgewählt. Ein weiterer Klick macht die Auswahl rückgängig.</p><h4>Shift</h4><p>Halte Shift, um mehrere Dateien gleichzeitig auszuwählen</p><h4>Escape</h4><p>Alle Dateien werden deselektiert</p>"), dom.make("div", "file_list_div", "", e));
            dom.make("div", "list", "", r)
        }
        n.fileSelection = new APP.GUI.selectionMechanism("file_entry_", "selected_file", function(e) {
            n.resources.get(e.index).selected = e.selected, n.fadeFilesThatStartWithSameNameAsSelectedOnes()
        }), n.refresh(!0)
    }, n.view = function() {
        APP.GUI.scrollTop()
    }, n.getFileType = function(e) {
        var t = n.file_types,
            r = e.lastIndexOf("."),
            i = e.slice(r + 1),
            o = {
                type: "unknown",
                mimetype: "unknown"
            },
            s = a(t.valid_lamus_written_resource_file_types, 0),
            l = s.indexOf(i);
        return -1 != s.indexOf(i) ? (o.type = t.valid_lamus_written_resource_file_types[l][2], o.mimetype = t.valid_lamus_written_resource_file_types[l][1], o) : o
    }, n.file_types = {
        valid_file_types: [
            ["eaf", "text/x-eaf+xml", "Annotation"],
            ["mdf", "Unknown", "Unspecified"],
            ["pdf", "application/pdf", "Primary Text"],
            ["xml", "text/xml", "Annotation"],
            ["txt", "text/plain", "Unspecified"],
            ["htm", "text/html", "Unspecified"],
            ["html", "text/html", "Unspecified"].audio, ["mpg", "video/mpeg", "video"],
            ["mpeg", "video/mpeg", "video"],
            ["mp4", "video/mp4", "video"],
            ["aif", "audio/x-aiff", "audio"],
            ["aiff", "audio/x-aiff", "audio"],
            ["jpg", "image/jpeg", "image"],
            ["jpeg", "image/jpeg", "image"],
            ["png", "image/png", "image"],
            ["tif", "image/tiff", "image"],
            ["tiff", "image/tiff", "image"],
            ["smil", "application/smil+xml", "video"].Unspecified, ["doc", "application/msword", "Unspecified"],
            ["odf", "application/vnd.oasis.opendocument.formula", "Unspecified"],
            ["odt", "application/vnd.oasis.opendocument.text", "Unspecified"],
            ["xls", "application/vnd.ms-excel", "Unspecified"],
            ["xlsx", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "Unspecified"],
            ["ppt", "application/vnd.ms-powerpoint", "Unspecified"],
            ["pptx", "application/vnd.openxmlformats-officedocument.presentationml.presentation", "Unspecified"].video, ["mov", "video/quicktime", "video"],
            ["mp3", "Unknown", "audio"],
            ["avi", "video/x-msvideo", "video"],
            ["au", "audio/basic", "audio"]
        ]
    }, n.recall = function(e) {
        e && n.resources.setState(e.resources), APP.forms.fill(lido_environment.forms.start, "start_form_", e.start_form), n.refresh()
    }, n.getSaveData = function() {
        n.resources.deleteKeyInAllItems("dataURL");
        var e = {
            resources: n.resources.getState(),
            start_form: APP.forms.makeObjectWithFormData(lido_environment.forms.start, "start_form_")
        };
        return e
    }, n.functions = function() {
        return [{
            id: "link_sort_alphabetically",
            icon: "az",
            label: "Alphabetisch sortieren",
            onclick: function() {
                n.sortAlphabetically()
            }
        }, {
            id: "link_remove_files",
            icon: "reset",
            label: "Entfernen",
            onclick: function() {
                n.removeSelectedFiles()
            }
        }, {
            id: "link_clear_file_list",
            icon: "reset",
            label: "Liste löschen",
            onclick: function() {
                n.reset()
            }
        }]
    }, n.refresh = function(t) {
        var r = g("list");
        r.innerHTML = "", n.resources.forEach(function(e, t) {
            n.renderResource({
                number: t,
                title: e.name,
                mime_type: e.mime_type,
                file_size: e.size,
                lastModified: e.lastModified,
                id: "file_entry_" + t,
                className: "file_entry media_file_entry",
                parent: r,
                status: e.status,
                path: e.path,
                dataURL: e.dataURL
            })
        }), 0 === n.resources.length && (r.innerHTML = "<h2>Keine Dateien importiert.</h2>"), e && !t && e.refresh(), n.fileSelection.selected_files = []
    }, n.renderResource = function(e) {
        {
            var t = dom.make("div", e.id, e.className, e.parent);
            dom.make("h2", "", "file_entry_title", t, e.title), dom.make("p", "", "", t, e.mimeType + '<br><span class="size_span">Größe: ' + e.file_size + '</span><br><span name="date_span" class="date_span">Letzte Änderung: ' + e.lastModified + "</span><br>")
        }
        if (e.dataURL) {
            var r = dom.make("img", "res_img_" + e.id, "lidoresource_img", t);
            r.src = e.dataURL
        }
        t.addEventListener("click", function(e) {
            return function() {
                n.fileSelection.clickedOnFile(e)
            }
        }(e.number), !1)
    }, n.pushFileMetadata = function(e) {
        for (var t, r = 0; t = e[r]; r++) n.addFileToList(t)
    }, n.addFileToList = function(e) {
        var t = new FileReader;
        t.onloadend = function() {
            n.resources.add({
                name: e.name,
                type: e.type || "n/a",
                size: strings.bytesToSize(e.size, 1),
                lastModified: e.lastModifiedDate.toLocaleDateString(),
                status: "stable",
                dataURL: t.result
            }), n.refresh()
        }, t.readAsDataURL(e)
    }, n.sortAlphabetically = function() {
        n.resources.sortByKey("name"), n.refresh()
    }, n.removeSelectedFiles = function() {
        var e = n.fileSelection.selected_files,
            t = n.resources.mapIndexesToIDs(e);
        n.resources.removeByID(t), n.refresh()
    }, n.getIDsOfResourcesThatStartWithTheSameNameAsThis = function(e) {
        var t = n.resources.getByID(e),
            r = n.resources.filter(function(n) {
                return e == n.id ? !1 : strings.isSubstringAStartOfAWordInString(strings.removeEndingFromFilename(n.name), strings.removeEndingFromFilename(t.name)) ? !0 : !1
            }),
            i = getArrayWithIDs(r);
        return i
    }, n.fadeFilesThatStartWithSameNameAsSelectedOnes = function() {
        for (var e, t = "file_entry_", r = [], i = 0; i < n.resources.length; i++) g(t + i.toString()).style.opacity = "1";
        for (var a = 0; a < n.fileSelection.selected_files.length; a++) {
            var o = n.fileSelection.selected_files[a],
                s = n.resources.idOf(o);
            r.push(s);
            var l = n.resources.idOf(o);
            e = n.getIDsOfResourcesThatStartWithTheSameNameAsThis(l);
            for (var d = 0; d < e.length; d++) r.push(e[d])
        }
        for (i = 0; i < r.length; i++) {
            var c = n.resources.indexOf(r[i]);
            g(t + c.toString()).style.opacity = "0.5"
        }
    }, n.handleFileListInputChange = function(e) {
        var t, r = e.target.files[0];
        return "txt" != strings.getFileTypeFromFilename(r.name) ? void APP.log("File List must be of type TXT!", "error") : void readFileAsText(r, function(e) {
            try {
                t = strings.linesToArray(e)
            } catch (r) {
                return void console.info("No files found! Maybe this file list is not valid!")
            }
            forEach(t, function(e) {
                e.length > 0 && " " != e && n.resources.add({
                    name: strings.getFilenameFromFilePath(e),
                    path: strings.getDirectoryFromFilePath(e),
                    status: "stable"
                })
            }), n.refresh()
        })
    }, n.IsSignatureOk = function() {
        var e = n.getSaveData().start_form.digitalisierungssignatur.digitalisierungssignatur,
            t = n.getSaveData().start_form.eintragsdokumentation.eintragsart;
        return "" == e || "" == t ? !1 : !0
    }, n.reset = function() {
        APP.forms.fill(lido_environment.forms.start, "start_form_", void 0, void 0), n.resources.reset(), n.refresh()
    }, n
}(), lido_environment.workflow.push(function() {
    "use strict";
    var e = {};
    e.parent = lido_environment;
    return e.element_id_prefix = "actor_", e.identity = {
        id: "lido2",
        title: "Objektbeschreibung",
        icon: "edit"
    }, e.module_view, e.init = function(n) {
        e.module_view = n, APP.forms.make(e.module_view, e.parent.forms.objektbeschreibung, "objektbeschreibung_", "objektbeschreibung_", void 0)
    }, e.getSaveData = function() {
        var n = {
            beschreibung_form: APP.forms.makeObjectWithFormData(e.parent.forms.objektbeschreibung, "objektbeschreibung_")
        };
        return n
    }, e.reset = function() {
        e.module_view.innerHTML = "", APP.forms.make(e.module_view, e.parent.forms.objektbeschreibung, "objektbeschreibung_", "objektbeschreibung_", void 0)
    }, e.recall = function(e) {
        APP.forms.fill(lido_environment.forms.objektbeschreibung, "objektbeschreibung_", e.beschreibung_form)
    }, e.IsDescriptionOk = function() {
        var n = e.getSaveData().beschreibung_form.objekt_identifikation.titel,
            t = e.getSaveData().beschreibung_form.objektzuordnung.objektart,
            r = e.getSaveData().beschreibung_form.objektzuordnung.objektgattung;
        return "" == n || "" == t || "" == r ? !1 : !0
    }, e.functions = function() {
        return []
    }, e
}()), lido_environment.workflow[2] = function() {
    "use strict";
    var e = function() {
            var e = APP.forms.makeObjectWithFormData(r.person_form, r.form_id_prefix);
            return e
        },
        n = function(e) {
            r.saveActivePerson("without_refreshing"), r.show(r.persons.idOf(e))
        },
        t = function() {
            return !r.persons.isThereAnyItemWhereKeyIsValue("name", "")
        },
        r = {};
    return r.parent = lido_environment, r.person_form = r.parent.forms.actor_herstellung, r.persons = new ObjectList, r.element_id_prefix = "lido3_", r.form_id_prefix = r.element_id_prefix + "af_", r.identity = {
        id: "lido3",
        title: "Herstellung",
        icon: "user"
    }, r.module_view, r.actor_wrap, r.init = function(e) {
        r.persons.reset(), r.module_view = e, r.left_wrap = dom.make("div", r.element_id_prefix + "left_wrap", "left_wrap", r.module_view), dom.h2(r.left_wrap, "Herstellung des Objekts"), dom.br(r.left_wrap), APP.forms.make(r.left_wrap, r.parent.forms.herstellung, "herstellung_", "herstellung_", void 0), r.actor_wrap = dom.make("div", r.element_id_prefix + "actor_wrap", "actor_wrap", r.module_view), r.gui_list = new APP.GUI.FORMS.clickableListSmall(r.actor_wrap, [], [], n, r.element_id_prefix + "list", 0);
        dom.make("div", r.element_id_prefix + "view", "", r.actor_wrap);
        r.refresh(!0)
    }, r.getSaveData = function() {
        r.saveActivePerson("without_refreshing");
        var e = {
            persons: r.persons.getState(),
            herstellung_form: APP.forms.makeObjectWithFormData(lido_environment.forms.herstellung, "herstellung_")
        };
        return e
    }, r.showNoPersonsMessage = function() {
        var e = r.actor_wrap;
        e.innerHTML = "";
        var n = dom.make("h2", "no_persons_text", "no_persons_text", e);
        n.innerHTML = "Es gibt noch keine AkteurInnen. Warum ";
        var t = dom.make("a", r.element_id_prefix + "new_person_link", r.element_id_prefix + "new_person_link", n);
        t.innerHTML = "erstellst", n.innerHTML += " du nicht welche?", g(r.element_id_prefix + "new_person_link").addEventListener("click", function() {
            r.createNewPerson()
        })
    }, r.recall = function(e) {
        APP.forms.fill(lido_environment.forms.herstellung, "herstellung_", e.herstellung_form), r.persons.setState(e.persons), r.refresh(), r.show(r.persons.getPointer())
    }, r.functions = function() {
        return [{
            id: r.element_id_prefix + "link_new_person",
            icon: "plus",
            label: "Neue AkteurIn",
            onclick: function() {
                r.createNewPerson()
            }
        }, {
            id: r.element_id_prefix + "link_delete_active_person",
            icon: "reset",
            label: "Diese AkteurIn löschen",
            onclick: function() {
                r.handleClickOnDeletePerson()
            }
        }, {
            id: r.element_id_prefix + "link_sort_persons_alphabetically",
            icon: "az",
            label: "AkteurInnen alphabetisch sortieren",
            onclick: function() {
                r.saveActivePerson(), r.persons.sortByKey("name"), r.refresh(), APP.log("Personen sortiert")
            }
        }, {
            id: r.element_id_prefix + "link_duplicateActivePerson",
            icon: "duplicate_user",
            label: "AkteurIn duplizieren",
            onclick: function() {
                r.saveActivePerson(), r.persons.duplicateActive(), r.refresh(), APP.log("Person gespeichert und dupliziert", "success")
            }
        }, {
            id: r.element_id_prefix + "link_delete_all_persons",
            icon: "reset",
            label: "Alle AkteurInnen löschen",
            onclick: r.erase_database
        }]
    }, r.erase_database = function() {
        APP.confirm("Möchtest du wirklich alle AkteurInnen löschen?", function(e) {
            e || (r.persons.reset(), APP.log("Alle AkteurInnen gelöscht"), r.refresh())
        }, "Nein", "Ja, löschen!")
    }, r.show = function(e) {
        if (0 == r.persons.length) return void console.info("person.show: No persons to show!");
        var n = r.persons.getIndexByID(e);
        "undefined" == typeof n && (console.warn("person.show: Undefined person_id! Showing person 0"), n = 0), console.log("Showing person " + n), r.createFormIfNotExistent(), r.gui_list.changeHighlight(n), r.persons.setPointer(e), r.refreshFormTitle();
        var t = r.persons.getActive();
        APP.forms.fill(r.person_form, r.form_id_prefix, t)
    }, r.refreshFormTitle = function() {
        var e = g(r.element_id_prefix + "form_title"),
            n = r.getDisplayName(r.persons.getActive());
        e.innerHTML = "" == n ? "Unbenannte AkteurIn" : n
    }, r.createFormIfNotExistent = function() {
        var e = g(r.element_id_prefix + "lidoperson_view");
        if (!e) {
            e = dom.make("div", r.element_id_prefix + "lidoperson_view", "lidoperson_view", r.actor_wrap), e.innerHTML = "";
            var n = dom.make("div", r.element_id_prefix + "title_div", "lidoperson_title_div", e);
            dom.make("h1", r.element_id_prefix + "form_title", "lidoperson_form_title", n, "Neue AkteurIn"), dom.make("div", r.element_id_prefix + "content_div", "lidoperson_content_div", e), APP.forms.make(g(r.element_id_prefix + "content_div"), r.parent.forms.actor_herstellung, r.form_id_prefix, r.form_id_prefix, void 0, void 0), g(r.form_id_prefix + "name").addEventListener("blur", r.saveActivePerson)
        }
    }, r.saveActivePerson = function(n) {
        if (-1 != r.persons.getPointer()) {
            var t = e();
            return t.display_name = r.getDisplayName(t), r.save(t), r.refresh(), r.refreshFormTitle(), t
        }
    }, r.save = function(e) {
        return r.persons.replaceActive(e), e
    }, r.createNewPerson = function(e) {
        if (r.saveActivePerson(), !t()) return void APP.alert("Bitte gib all deinen AkteurInnen zuerst einen Namen!");
        e || (e = APP.forms.createEmptyObjectFromTemplate(r.person_form)), e.display_name = r.getDisplayName(e);
        var n = r.persons.add(e);
        r.createFormIfNotExistent(), r.refresh(), r.show(n)
    }, r.handleClickOnDeletePerson = function() {
        if (-1 == typeof r.persons.pointer) return void console.warn("Active Person is undefined. Don't know what to delete!");
        var e, n = r.persons.getActive().name;
        e = "" == n ? "Möchtest du diese AkteurIn wirklich löschen?" : "Möchtest du " + n + "wirklich löschen?", APP.confirm(e, function(e) {
            e || (r.deleteActivePerson(), APP.log("" + n + " gelöscht!"))
        }, "Nein", "Ja, löschen")
    }, r.deleteActivePerson = function() {
        r.persons.removeActive(), r.refresh()
    }, r.refresh = function() {
        r.actor_wrap.innerHTML = "";
        var e = r.persons.map(function(e) {
                return r.getDisplayName(e.id)
            }),
            n = r.persons.map(function(e) {
                return r.getDisplayRole(e.id)
            });
        r.gui_list.refresh(e, n), 0 == r.persons.length ? (r.showNoPersonsMessage(), APP.environments.disableFunction(r.element_id_prefix + "link_delete_active_person"), APP.environments.disableFunction(r.element_id_prefix + "sa_div"), APP.environments.disableFunction(r.element_id_prefix + "link_duplicateActivePerson")) : (r.createFormIfNotExistent(), r.show(r.persons.getPointer()), r.gui_list.changeHighlight(r.persons.getActiveIndex()), APP.environments.enableFunction(r.element_id_prefix + "link_delete_active_person"), APP.environments.enableFunction(r.element_id_prefix + "sa_div"), APP.environments.enableFunction(r.element_id_prefix + "link_duplicateActivePerson"))
    }, r.getDisplayName = function(e) {
        var n;
        return "object" == typeof e ? n = e : r.persons.existsByID(e) && (n = r.persons.getByID(e)), n ? n.name && "" != n.name ? n.name : "Unbenannte AkteurIn" : console.warn("Person undefined!")
    }, r.getDisplayRole = function(e) {
        var n;
        return "object" == typeof e ? n = e : r.persons.existsByID(e) && (n = r.persons.getByID(e)), n ? n["function"] && "" != n["function"] ? n["function"] : "" : console.warn("Person undefined!")
    }, r.doesHerstellungHaveValidYear = function() {
        var e = r.getSaveData().herstellung_form.earliest_date,
            n = r.getSaveData().herstellung_form.latest_date;
        return "" == e && "" == n || !(e.length > 4 || n.length > 4 || /\D/.test(e) || /\D/.test(n) || Number(e) > Number(n)) ? !0 : !1
    }, r.doesEveryPersonHaveValidBirthYear = function() {
        for (var e = 0; e < r.persons.length; e++) {
            var n = r.persons.get(e).geburtsjahr,
                t = r.persons.get(e).sterbejahr;
            if (("" != n || "" != t) && (n.length > 4 || t.length > 4 || /\D/.test(n) || /\D/.test(t) || Number(n) > Number(t))) return !1
        }
        return !0
    }, r.areAllPersonsNamed = function() {
        for (var e = 0; e < r.persons.length; e++) {
            var n = r.persons.get(e);
            if ("" == n.name || "Unbenannte AkteurIn" == n.name) return !1
        }
        return !0
    }, r.reset = function() {
        APP.forms.fill(lido_environment.forms.herstellung, "herstellung_"), r.persons.reset(), r.refresh()
    }, r
}(), lido_environment.workflow[3] = function() {
    "use strict";
    var e = function() {
            var e = APP.forms.makeObjectWithFormData(r.person_form, r.form_id_prefix);
            return e
        },
        n = function(e) {
            r.saveActivePerson("without_refreshing"), r.show(r.persons.idOf(e))
        },
        t = function() {
            return !r.persons.isThereAnyItemWhereKeyIsValue("name", "")
        },
        r = {};
    return r.parent = lido_environment, r.person_form = r.parent.forms.actor_inszenierung, r.persons = new ObjectList, r.element_id_prefix = "lido4_", r.form_id_prefix = r.element_id_prefix + "af_", r.identity = {
        id: "lido4",
        title: "Inszenierung",
        icon: "user"
    }, r.module_view, r.actor_wrap, r.init = function(e) {
        r.persons.reset(), r.module_view = e, r.left_wrap = dom.make("div", r.element_id_prefix + "left_wrap", "left_wrap", r.module_view), dom.h2(r.left_wrap, "Inszenierung / Performance"), dom.br(r.left_wrap), APP.forms.make(r.left_wrap, r.parent.forms.inszenierung, "inszenierung_", "inszenierung_", void 0), r.actor_wrap = dom.make("div", r.element_id_prefix + "actor_wrap", "actor_wrap", r.module_view), r.gui_list = new APP.GUI.FORMS.clickableListSmall(r.actor_wrap, [], [], n, r.element_id_prefix + "list", 0);
        dom.make("div", r.element_id_prefix + "view", "", r.actor_wrap);
        r.refresh(!0)
    }, r.getSaveData = function() {
        r.saveActivePerson("without_refreshing");
        var e = {
            persons: r.persons.getState(),
            inszenierung_form: APP.forms.makeObjectWithFormData(lido_environment.forms.inszenierung, "inszenierung_")
        };
        return e
    }, r.showNoPersonsMessage = function() {
        var e = r.actor_wrap;
        e.innerHTML = "";
        var n = dom.make("h2", "no_persons_text", "no_persons_text", e);
        n.innerHTML = "Es gibt noch keine AkteurInnen. Warum ";
        var t = dom.make("a", r.element_id_prefix + "new_person_link", r.element_id_prefix + "new_person_link", n);
        t.innerHTML = "erstellst", n.innerHTML += " du nicht welche?", g(r.element_id_prefix + "new_person_link").addEventListener("click", function() {
            r.createNewPerson()
        })
    }, r.recall = function(e) {
        APP.forms.fill(lido_environment.forms.inszenierung, "inszenierung_", e.inszenierung_form), r.persons.setState(e.persons), r.refresh(), r.show(r.persons.getPointer())
    }, r.functions = function() {
        return [{
            id: r.element_id_prefix + "link_new_person",
            icon: "plus",
            label: "Neue AkteurIn",
            onclick: function() {
                r.createNewPerson()
            }
        }, {
            id: r.element_id_prefix + "link_delete_active_person",
            icon: "reset",
            label: "Diese AkteurIn löschen",
            onclick: function() {
                r.handleClickOnDeletePerson()
            }
        }, {
            id: r.element_id_prefix + "link_sort_persons_alphabetically",
            icon: "az",
            label: "AkteurInnen alphabetisch sortieren",
            onclick: function() {
                r.saveActivePerson(), r.persons.sortByKey("name"), r.refresh(), APP.log("Personen sortiert")
            }
        }, {
            id: r.element_id_prefix + "link_duplicateActivePerson",
            icon: "duplicate_user",
            label: "AkteurIn duplizieren",
            onclick: function() {
                r.saveActivePerson(), r.persons.duplicateActive(), r.refresh(), APP.log("Person gespeichert und dupliziert", "success")
            }
        }, {
            id: r.element_id_prefix + "link_delete_all_persons",
            icon: "reset",
            label: "Alle AkteurInnen löschen",
            onclick: r.erase_database
        }]
    }, r.erase_database = function() {
        APP.confirm("Möchtest du wirklich alle AkteurInnen löschen?", function(e) {
            e || (r.persons.reset(), APP.log("Alle AkteurInnen gelöscht"), r.refresh())
        }, "Nein", "Ja, löschen!")
    }, r.show = function(e) {
        if (0 == r.persons.length) return void console.info("person.show: No persons to show!");
        var n = r.persons.getIndexByID(e);
        "undefined" == typeof n && (console.warn("person.show: Undefined person_id! Showing person 0"), n = 0), console.log("Showing person " + n), r.createFormIfNotExistent(), r.gui_list.changeHighlight(n), r.persons.setPointer(e), r.refreshFormTitle();
        var t = r.persons.getActive();
        APP.forms.fill(r.person_form, r.form_id_prefix, t)
    }, r.refreshFormTitle = function() {
        var e = g(r.element_id_prefix + "form_title"),
            n = r.getDisplayName(r.persons.getActive());
        e.innerHTML = "" == n ? "Unbenannte AkteurIn" : n
    }, r.createFormIfNotExistent = function() {
        var e = g(r.element_id_prefix + "lidoperson_view");
        if (!e) {
            e = dom.make("div", r.element_id_prefix + "lidoperson_view", "lidoperson_view", r.actor_wrap), e.innerHTML = "";
            var n = dom.make("div", r.element_id_prefix + "title_div", "lidoperson_title_div", e);
            dom.make("h1", r.element_id_prefix + "form_title", "lidoperson_form_title", n, "Neue AkteurIn"), dom.make("div", r.element_id_prefix + "content_div", "lidoperson_content_div", e), APP.forms.make(g(r.element_id_prefix + "content_div"), r.parent.forms.actor_inszenierung, r.form_id_prefix, r.form_id_prefix, void 0, void 0), g(r.form_id_prefix + "name").addEventListener("blur", r.saveActivePerson)
        }
    }, r.saveActivePerson = function(n) {
        if (-1 != r.persons.getPointer()) {
            var t = e();
            return t.display_name = r.getDisplayName(t), r.save(t), r.refresh(), r.refreshFormTitle(), t
        }
    }, r.save = function(e) {
        return r.persons.replaceActive(e), e
    }, r.createNewPerson = function(e) {
        if (r.saveActivePerson(), !t()) return void APP.alert("Bitte gib all deinen AkteurInnen zuerst einen Namen!");
        e || (e = APP.forms.createEmptyObjectFromTemplate(r.person_form)), e.display_name = r.getDisplayName(e);
        var n = r.persons.add(e);
        r.createFormIfNotExistent(), r.refresh(), r.show(n)
    }, r.handleClickOnDeletePerson = function() {
        if (-1 == typeof r.persons.pointer) return void console.warn("Active Person is undefined. Don't know what to delete!");
        var e, n = r.persons.getActive().name;
        e = "" == n ? "Möchtest du diese AkteurIn wirklich löschen?" : "Möchtest du " + n + "wirklich löschen?", APP.confirm(e, function(e) {
            e || (r.deleteActivePerson(), APP.log("" + n + " gelöscht!"))
        }, "Nein", "Ja, löschen")
    }, r.deleteActivePerson = function() {
        r.persons.removeActive(), r.refresh()
    }, r.refresh = function() {
        r.actor_wrap.innerHTML = "";
        var e = r.persons.map(function(e) {
                return r.getDisplayName(e.id)
            }),
            n = r.persons.map(function(e) {
                return r.getDisplayRole(e.id)
            });
        r.gui_list.refresh(e, n), 0 == r.persons.length ? (r.showNoPersonsMessage(), APP.environments.disableFunction(r.element_id_prefix + "link_delete_active_person"), APP.environments.disableFunction(r.element_id_prefix + "sa_div"), APP.environments.disableFunction(r.element_id_prefix + "link_duplicateActivePerson")) : (r.createFormIfNotExistent(), r.show(r.persons.getPointer()), r.gui_list.changeHighlight(r.persons.getActiveIndex()), APP.environments.enableFunction(r.element_id_prefix + "link_delete_active_person"), APP.environments.enableFunction(r.element_id_prefix + "sa_div"), APP.environments.enableFunction(r.element_id_prefix + "link_duplicateActivePerson"))
    }, r.getDisplayName = function(e) {
        var n;
        return "object" == typeof e ? n = e : r.persons.existsByID(e) && (n = r.persons.getByID(e)), n ? n.name && "" != n.name ? n.name : "Unbenannte AkteurIn" : console.warn("Person undefined!")
    }, r.getDisplayRole = function(e) {
        var n;
        return "object" == typeof e ? n = e : r.persons.existsByID(e) && (n = r.persons.getByID(e)), n ? n["function"] && "" != n["function"] ? n["function"] : "" : console.warn("Person undefined!")
    }, r.doesInszenierungHaveValidYear = function() {
        var e = r.getSaveData().inszenierung_form.earliest_date,
            n = r.getSaveData().inszenierung_form.latest_date;
        return "" == e && "" == n || !(e.length > 4 || n.length > 4 || /\D/.test(e) || /\D/.test(n) || Number(e) > Number(n)) ? !0 : !1
    }, r.doesEveryPersonHaveValidBirthYear = function() {
        for (var e = 0; e < r.persons.length; e++) {
            var n = r.persons.get(e).geburtsjahr,
                t = r.persons.get(e).sterbejahr;
            if (("" != n || "" != t) && (n.length > 4 || t.length > 4 || /\D/.test(n) || /\D/.test(t) || Number(n) > Number(t))) return !1
        }
        return !0
    }, r.areAllPersonsNamed = function() {
        for (var e = 0; e < r.persons.length; e++) {
            var n = r.persons.get(e);
            if ("" == n.name || "Unbenannte AkteurIn" == n.name) return !1
        }
        return !0
    }, r.reset = function() {
        APP.forms.fill(lido_environment.forms.inszenierung, "inszenierung_"), r.persons.reset(), r.refresh()
    }, r
}(), lido_environment.workflow[4] = function() {
    "use strict";
    var e = function() {
            var e = APP.forms.makeObjectWithFormData(r.person_form, r.form_id_prefix);
            return e
        },
        n = function(e) {
            r.saveActivePerson("without_refreshing"), r.show(r.persons.idOf(e))
        },
        t = function() {
            return !r.persons.isThereAnyItemWhereKeyIsValue("name", "")
        },
        r = {};
    return r.parent = lido_environment, r.person_form = r.parent.forms.actor_erwerb, r.persons = new ObjectList, r.element_id_prefix = "lido5_", r.form_id_prefix = r.element_id_prefix + "af_", r.identity = {
        id: "lido5",
        title: "Erwerb",
        icon: "user"
    }, r.module_view, r.actor_wrap, r.init = function(e) {
        r.persons.reset(), r.module_view = e, r.left_wrap = dom.make("div", r.element_id_prefix + "left_wrap", "left_wrap", r.module_view), dom.h2(r.left_wrap, "Provenienz / Erwerb"), dom.br(r.left_wrap), APP.forms.make(r.left_wrap, r.parent.forms.erwerb, "erwerb_", "erwerb_", void 0), r.actor_wrap = dom.make("div", r.element_id_prefix + "actor_wrap", "actor_wrap", r.module_view), r.gui_list = new APP.GUI.FORMS.clickableListSmall(r.actor_wrap, [], [], n, r.element_id_prefix + "list", 0);
        dom.make("div", r.element_id_prefix + "view", "", r.actor_wrap);
        r.refresh(!0)
    }, r.getSaveData = function() {
        r.saveActivePerson("without_refreshing");
        var e = {
            persons: r.persons.getState(),
            erwerb_form: APP.forms.makeObjectWithFormData(lido_environment.forms.erwerb, "erwerb_")
        };
        return e
    }, r.showNoPersonsMessage = function() {
        var e = r.actor_wrap;
        e.innerHTML = "";
        var n = dom.make("h2", "no_persons_text", "no_persons_text", e);
        n.innerHTML = "Es gibt noch keine AkteurInnen. Warum ";
        var t = dom.make("a", r.element_id_prefix + "new_person_link", r.element_id_prefix + "new_person_link", n);
        t.innerHTML = "erstellst", n.innerHTML += " du nicht welche?", g(r.element_id_prefix + "new_person_link").addEventListener("click", function() {
            r.createNewPerson()
        })
    }, r.recall = function(e) {
        APP.forms.fill(lido_environment.forms.erwerb, "erwerb_", e.erwerb_form), r.persons.setState(e.persons), r.refresh(), r.show(r.persons.getPointer())
    }, r.functions = function() {
        return [{
            id: r.element_id_prefix + "link_new_person",
            icon: "plus",
            label: "Neue AkteurIn",
            onclick: function() {
                r.createNewPerson()
            }
        }, {
            id: r.element_id_prefix + "link_delete_active_person",
            icon: "reset",
            label: "Diese AkteurIn löschen",
            onclick: function() {
                r.handleClickOnDeletePerson()
            }
        }, {
            id: r.element_id_prefix + "link_sort_persons_alphabetically",
            icon: "az",
            label: "AkteurInnen alphabetisch sortieren",
            onclick: function() {
                r.saveActivePerson(), r.persons.sortByKey("name"), r.refresh(), APP.log("Personen sortiert")
            }
        }, {
            id: r.element_id_prefix + "link_duplicateActivePerson",
            icon: "duplicate_user",
            label: "AkteurIn duplizieren",
            onclick: function() {
                r.saveActivePerson(), r.persons.duplicateActive(), r.refresh(), APP.log("Person gespeichert und dupliziert", "success")
            }
        }, {
            id: r.element_id_prefix + "link_delete_all_persons",
            icon: "reset",
            label: "Alle AkteurInnen löschen",
            onclick: r.erase_database
        }]
    }, r.erase_database = function() {
        APP.confirm("Möchtest du wirklich alle AkteurInnen löschen?", function(e) {
            e || (r.persons.reset(), APP.log("Alle AkteurInnen gelöscht"), r.refresh())
        }, "Nein", "Ja, löschen!")
    }, r.show = function(e) {
        if (0 == r.persons.length) return void console.info("person.show: No persons to show!");
        var n = r.persons.getIndexByID(e);
        "undefined" == typeof n && (console.warn("person.show: Undefined person_id! Showing person 0"), n = 0), console.log("Showing person " + n), r.createFormIfNotExistent(), r.gui_list.changeHighlight(n), r.persons.setPointer(e), r.refreshFormTitle();
        var t = r.persons.getActive();
        APP.forms.fill(r.person_form, r.form_id_prefix, t)
    }, r.refreshFormTitle = function() {
        var e = g(r.element_id_prefix + "form_title"),
            n = r.getDisplayName(r.persons.getActive());
        e.innerHTML = "" == n ? "Unbenannte AkteurIn" : n
    }, r.createFormIfNotExistent = function() {
        var e = g(r.element_id_prefix + "lidoperson_view");
        if (!e) {
            e = dom.make("div", r.element_id_prefix + "lidoperson_view", "lidoperson_view", r.actor_wrap), e.innerHTML = "";
            var n = dom.make("div", r.element_id_prefix + "title_div", "lidoperson_title_div", e);
            dom.make("h1", r.element_id_prefix + "form_title", "lidoperson_form_title", n, "Neue AkteurIn"), dom.make("div", r.element_id_prefix + "content_div", "lidoperson_content_div", e), APP.forms.make(g(r.element_id_prefix + "content_div"), r.parent.forms.actor_erwerb, r.form_id_prefix, r.form_id_prefix, void 0, void 0), g(r.form_id_prefix + "name").addEventListener("blur", r.saveActivePerson)
        }
    }, r.saveActivePerson = function(n) {
        if (-1 != r.persons.getPointer()) {
            var t = e();
            return t.display_name = r.getDisplayName(t), r.save(t), r.refresh(), r.refreshFormTitle(), t
        }
    }, r.save = function(e) {
        return r.persons.replaceActive(e), e
    }, r.createNewPerson = function(e) {
        if (r.saveActivePerson(), !t()) return void APP.alert("Bitte gib all deinen AkteurInnen zuerst einen Namen!");
        e || (e = APP.forms.createEmptyObjectFromTemplate(r.person_form)), e.display_name = r.getDisplayName(e);
        var n = r.persons.add(e);
        r.createFormIfNotExistent(), r.refresh(), r.show(n)
    }, r.handleClickOnDeletePerson = function() {
        if (-1 == typeof r.persons.pointer) return void console.warn("Active Person is undefined. Don't know what to delete!");
        var e, n = r.persons.getActive().name;
        e = "" == n ? "Möchtest du diese AkteurIn wirklich löschen?" : "Möchtest du " + n + "wirklich löschen?", APP.confirm(e, function(e) {
            e || (r.deleteActivePerson(),
                APP.log("" + n + " gelöscht!"))
        }, "Nein", "Ja, löschen")
    }, r.deleteActivePerson = function() {
        r.persons.removeActive(), r.refresh()
    }, r.refresh = function() {
        r.actor_wrap.innerHTML = "";
        var e = r.persons.map(function(e) {
                return r.getDisplayName(e.id)
            }),
            n = r.persons.map(function(e) {
                return r.getDisplayRole(e.id)
            });
        r.gui_list.refresh(e, n), 0 == r.persons.length ? (r.showNoPersonsMessage(), APP.environments.disableFunction(r.element_id_prefix + "link_delete_active_person"), APP.environments.disableFunction(r.element_id_prefix + "sa_div"), APP.environments.disableFunction(r.element_id_prefix + "link_duplicateActivePerson")) : (r.createFormIfNotExistent(), r.show(r.persons.getPointer()), r.gui_list.changeHighlight(r.persons.getActiveIndex()), APP.environments.enableFunction(r.element_id_prefix + "link_delete_active_person"), APP.environments.enableFunction(r.element_id_prefix + "sa_div"), APP.environments.enableFunction(r.element_id_prefix + "link_duplicateActivePerson"))
    }, r.getDisplayName = function(e) {
        var n;
        return "object" == typeof e ? n = e : r.persons.existsByID(e) && (n = r.persons.getByID(e)), n ? n.name && "" != n.name ? n.name : "Unbenannte AkteurIn" : console.warn("Person undefined!")
    }, r.getDisplayRole = function(e) {
        var n;
        return "object" == typeof e ? n = e : r.persons.existsByID(e) && (n = r.persons.getByID(e)), n ? n["function"] && "" != n["function"] ? n["function"] : "" : console.warn("Person undefined!")
    }, r.doesErwerbHaveValidYear = function() {
        var e = r.getSaveData().erwerb_form.earliest_date,
            n = r.getSaveData().erwerb_form.latest_date;
        return "" == e && "" == n || !(e.length > 4 || n.length > 4 || /\D/.test(e) || /\D/.test(n) || Number(e) > Number(n)) ? !0 : !1
    }, r.doesEveryPersonHaveValidBirthYear = function() {
        for (var e = 0; e < r.persons.length; e++) {
            var n = r.persons.get(e).geburtsjahr,
                t = r.persons.get(e).sterbejahr;
            if (("" != n || "" != t) && (n.length > 4 || t.length > 4 || /\D/.test(n) || /\D/.test(t) || Number(n) > Number(t))) return !1
        }
        return !0
    }, r.areAllPersonsNamed = function() {
        for (var e = 0; e < r.persons.length; e++) {
            var n = r.persons.get(e);
            if ("" == n.name || "Unbenannte AkteurIn" == n.name) return !1
        }
        return !0
    }, r.reset = function() {
        APP.forms.fill(lido_environment.forms.erwerb, "erwerb_"), r.persons.reset(), r.refresh()
    }, r
}(), lido_environment.workflow.push(function() {
    "use strict";
    var e, n, t, r, i, a = {};
    return a.parent = lido_environment, a.view_element, a.identity = {
        id: "xml_output",
        title: "XML Output",
        icon: "submit"
    }, a.init = function(o) {
        e = a.parent.workflow[0], n = a.parent.workflow[1], t = a.parent.workflow[2], r = a.parent.workflow[3], i = a.parent.workflow[4], a.view_element = o
    }, a.view = function() {
        return APP.save(), e.IsSignatureOk() ? n.IsDescriptionOk() ? t.doesHerstellungHaveValidYear() ? t.doesEveryPersonHaveValidBirthYear() ? r.doesInszenierungHaveValidYear() ? r.doesEveryPersonHaveValidBirthYear() ? i.doesErwerbHaveValidYear() ? i.doesEveryPersonHaveValidBirthYear() ? void a.generate() : (APP.view(i), void APP.alert("Das Datum bei einem Erwerbs Akteur ist nicht korrekt! (Es sind nur maximal 4 Zahlen erlaubt)")) : (APP.view(i), void APP.alert("Das Datum bei Erwerb ist nicht korrekt! (Es sind nur maximal 4 Zahlen erlaubt)")) : (APP.view(r), void APP.alert("Das Datum bei einem Inszenierungs Akteur ist nicht korrekt! (Es sind nur maximal 4 Zahlen erlaubt)")) : (APP.view(r), void APP.alert("Das Datum bei Inszenierung ist nicht korrekt! (Es sind nur maximal 4 Zahlen erlaubt)")) : (APP.view(t), void APP.alert("Das Datum bei einem Herstellungs Akteur ist nicht korrekt! (Es sind nur maximal 4 Zahlen erlaubt)")) : (APP.view(t), void APP.alert("Das Datum bei Herstellung ist nicht korrekt! (Es sind nur maximal 4 Zahlen erlaubt)")) : (APP.view(n), void APP.alert("Objekttitel, Objektgattung oder Objektart leer!")) : (APP.view(e), void APP.alert("Digitalisierungssignatur oder Eintragsart leer!"))
    }, a.functions = function() {
        return []
    }, a.generate = function() {
        a.view_element.innerHTML = "";
        var o = {
                lido1: e.getSaveData(),
                lido2: n.getSaveData(),
                lido3: t.getSaveData(),
                lido4: r.getSaveData(),
                lido5: i.getSaveData()
            },
            s = lido_environment.lido_generator(o),
            l = lido_environment.getProjectName() + ".xml",
            d = {
                url: "http://dd-dariah.uni-koeln.de/exist/apps/wahn/importpage.html",
                xml_string_key: "content",
                additional_data: "name=" + l,
                additional_headers: [{
                    key: "Content-Type",
                    value: "application/x-www-form-urlencoded; charset=UTF-8"
                }]
            };
        APP.GUI.createXMLOutputDIV(a.view_element, l, "ta_0", s, l, !1, d)
    }, a
}());