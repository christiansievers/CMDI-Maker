var imdi_environment = function() {
    var e = {};
    return e.name = "imdi", e.id = "imdi", e.title = "IMDI", e.version = "2.12.1", e.workflow = [], e.languages = [], e.l = function(n, t, o, s) {
        return APP.getTermInActiveLanguage(e.languages, n, t, o, s)
    }, e.not_allowed_chars = " !\"§$%&/\\()=?^°`´'#*+~<>[]{}|²³,.;:áÁäÄàÀéÉîöÖóÓòÒüÜúÚùÙ", e.metadataLanguageIDs = [
        ["eng", "English"],
        ["ger", "German"],
        ["spa", "Spanish"],
        ["fra", "French"],
        ["rus", "Russian"],
        ["ind", "Indonesian"],
        ["por", "Portuguese"],
        ["arb", "Standard Arabic"]
    ], e.init = function() {
        e.displayMetadataLanguages()
    }, e.displayMetadataLanguages = function() {
        var n = g("metadata_language_select");
        dom.setSelectOptions(n, e.metadataLanguageIDs, 1, 0, !1)
    }, e.settings = function() {
        return [{
            title: e.l("settings", "output_format"),
            id: "output_format_select",
            type: "empty"
        }, {
            title: e.l("settings", "global_language_of_metadata"),
            type: "select",
            name: "metadata_language",
            id: "metadata_language_select"
        }, {
            title: e.l("settings", "cmdi_metadata_creator"),
            description: e.l("settings", "cmdi_metadata_creator_description"),
            type: "text",
            name: "metadata_creator",
            id: "metadata_creator",
            value: "CMDI Maker User"
        }, {
            title: e.l("settings", "calculate_actors_age"),
            description: e.l("settings", "calculate_actors_age_description"),
            type: "toggle",
            default_value: !0,
            name: "radio_age_calc",
            id: "radio_age_calc"
        }, {
            title: e.l("settings", "export_actors_as_json"),
            onclick: function() {
                e.workflow[2].export_actors()
            },
            type: "link"
        }, {
            title: e.l("settings", "preserve_hyphens_in_session_and_filenames"),
            description: e.l("settings", "preserve_hyphens_description"),
            id: "preserve_hyphens",
            type: "toggle"
        }, {
            title: e.l("settings", "import_actors_from_json_or_imdi"),
            description: e.l("settings", "import_actors_description"),
            type: "file",
            file_input_id: "actors_file_input",
            file_input_name: "actors_file_input",
            onchange: e.workflow[2].handleImportFileInputChange
        }]
    }, e.recall = function(e) {
        dom.setRadiosByValue(g("output_format"), e.output_format), APP.GUI.setToggleValue(g("radio_age_calc"), e.calc_actors_age), APP.GUI.setToggleValue(g("preserve_hyphens"), e.preserve_hyphens), g("metadata_language_select").selectedIndex = e.metadata_language, g("metadata_creator").value = e.metadata_creator
    }, e.getProjectName = function() {
        return get("corpus_name")
    }, e.getSaveData = function() {
        var e = {};
        return e.output_format = dom.getSelectedRadioValue(g("output_format")), e.calc_actors_age = g("radio_age_calc").on, e.preserve_hyphens = g("preserve_hyphens").on, e.metadata_creator = get("metadata_creator"), e.metadata_language = g("metadata_language_select").selectedIndex, e
    }, e.reset = function() {}, APP.environments.add(e), e
}();
imdi_environment.languages[0] = {
    id: "english",
    name: "English",
    terms: {
        workflow: {
            corpus: "Corpus",
            resources: "Resources",
            actors: "Actors",
            session: "Sessions",
            xml_output: "XML Output"
        },
        settings: {
            calculate_actors_age: "Calculate Actor's Age",
            calculate_actors_age_description: "When this feature is activated, CMDI Maker checks if the age of an actor (if it has not been specified already) can be calculated from the actor's birth date and the session date.<br>When an age can be calculated, it will appear in the output file.<br>(Age = Session Date - Actor's Birth Date)",
            output_format: "Output Format",
            imdi: "IMDI",
            cmdi_with_imdi_profile: "CMDI with IMDI profile",
            export_actors_as_json: "Export Actors as JSON",
            import_actors_from_json_or_imdi: "Import Actors from JSON or IMDI",
            import_actors_description: "Please import UTF-8 encoded files only!",
            delete_actors_database: "Delete Actors",
            delete_actors_database_description: "CMDI Maker saves all your actors in a Web Storage browser database, so that they are kept, even if you close the browser window.",
            global_language_of_metadata: "Global Language of Metadata",
            cmdi_metadata_creator: "CMDI Metadata Creator",
            cmdi_metadata_creator_description: "The CMDI metadata format requires the name of a metadata creator. This is probably you. If so, please type in your name.",
            preserve_hyphens_in_session_and_filenames: "Preserve hyphens in session and file names",
            preserve_hyphens_description: "By default, hyphens are not allowed in session and file names, as it troubled LAMUS. If you know what you are doing, you can turn this on to allow and preserve hyphens."
        },
        main: {
            reset_form: "Reset Form",
            yes_delete_form: "Yes, delete form",
            no: "No",
            really_reset_form: "Really?<br>You want to reset the form and delete corpus and all sessions?",
            form_reset: "Form reset",
            search: "Search",
            ok: "OK",
            function_currently_unavailable: "This function is currently unavailable!",
            warning: "WARNING:<br>",
            really_overwrite_data: "Do you really want to overwrite data?",
            yes_overwrite_data: "Yes, overwrite data"
        },
        languages: {
            set_global_languages_of_content: "Set Global Languages of Content",
            language_search: "Language Search",
            result: "result",
            results: "results",
            language_name: "Language Name",
            is_new_global: "is a new Global Content Language",
            iso_code: "ISO code",
            not_found_in_db: "not found in database",
            specify_search_request_at_least_3_chars: "Please specify your search request.\nType in at least 3 characters.",
            primary_language: "Primary Language",
            mother_tongue: "Mother Tongue",
            current_content_languages: "Current Content Languages",
            content_language_removed__before_lang: 'Content Language "',
            content_language_removed__after_lang: '" removed',
            specify_local_used_language_name: "Specify local used language name"
        },
        environment: {
            signal: "IMDI",
            signal_msg: "You are using IMDI Profile v. "
        },
        resources: {
            compatibility_warnings: {
                general: "This file does not seem to be a valid resource file for LAMUS. Please consider recoding it.",
                invalid_media_file: "This media file does not seem to be a valid file for LAMUS. Please consider recoding it to WAV (audio) or MP4 (video).",
                invalid_written_resource: "This file does not seem to be a valid written resource for LAMUS. Please consider recoding it to PDF or TXT."
            },
            unknown: "Unknown",
            create_one_session_per_file: "Create one session per file",
            files: "Files",
            selected_files: "Selected Files",
            sort_alphabetically: "Sort Files alphabetically",
            remove: "Remove",
            clear_file_list: "Clear File List",
            usage: "Usage",
            click: "Click",
            click_to_select: "Select resource, click again to deselect a single resource",
            shift: "Shift",
            shift_to_select_multiple: "Hold shift to select multiple resources",
            escape: "Escape",
            escape_to_deselect: "Press escape to deselect all resources",
            size: "Size",
            last_modified: "Last modified",
            no_resource_files_imported: "No resource files imported."
        },
        actors: {
            new_actor: "New Actor",
            delete_this_actor: "Delete this actor",
            delete_all_actors: "Delete all actors",
            sort_actors_alphabetically: "Sort Actors alphabetically",
            actors_alphabetically_sorted: "Actors sorted",
            save_and_duplicate_this_actor: "Save and duplicate this actor",
            duplicate_this_actor: "Duplicate this actor",
            yes_delete_all_actors: "Yes, delete all actors",
            no: "No",
            ok: "OK",
            confirm_erasing_actors_db: "Really?<br>You want to erase the whole actors database?",
            all_actors_deleted: "All actors deleted",
            save_actor: "Save actor",
            save_changes_to_this_actor: "Save changes to this actor",
            there_are_no_actors: "There are no actors!",
            actors_imported: "actors imported",
            actor_saved_and_duplicated: "Actor saved and duplicated.",
            give_your_actor_a_name_first: "Please give your actor a name first.",
            yes_delete_actor: "Yes, delete actor",
            really_erase_before_name: "Really?<br>You want to erase ",
            really_erase_after_name: "?",
            actor_deleted_before_name: "Actor ",
            actor_deleted_after_name: " deleted",
            there_are_no_actors_yet: "There are no actors yet.",
            why_not_create_one__before_link: "Why not ",
            why_not_create_one__link: "create one",
            why_not_create_one__after_link: "?",
            please_give_all_actors_a_name_before_creating_new_one: "Please give all your actors a name first, before creating a new one!",
            really_erase_this_actor: "Really?<br>You want to erase this actor?",
            unnamed_actor: "Unnamed actor",
            signal: "IMDI",
            signal_msg: "You are using IMDI Profile v. "
        },
        session: {
            new_session: "New Session",
            copy_session_1_metadata: "Copy Session 1 metadata to all sessions",
            reset_form: "Reset Form",
            sort_by_name: "Sort by name",
            add_to_session: "Add to session",
            no_files_have_been_added: "No files have been added.",
            add_some_files: "Add some files.",
            new_session_has_been_created: "A new session has been created.",
            name: "Name",
            unnamed_session: "Unnamed Session",
            session: "Session",
            delete_session: "Delete Session",
            expand_session: "Expand Session",
            collapse_session: "Collapse Session",
            expand_collapse_session: "Expand/collapse session",
            no_actors_in_db_yet: "There are no actors in the database yet.",
            create_some_actors: "Create some actors.",
            really_erase_session: "Really?<br>You want to erase a whole session? Are you sure about that?",
            yes_delete_session: "Yes, delete session",
            session_deleted: "Session deleted",
            this_corpus_contains_no_sessions_yet: "This corpus contains no sessions yet.",
            why_not_create_one__before_link: "Why not ",
            why_not_create_one__link: "create one",
            why_not_create_one__after_link: "?",
            this_actor_is_already_in_the_session: "This actor is already in the session.",
            unknown_file_problem__before_filename: "We have a problem.<br>I don't know if this file is a Media File or a Written Resource:",
            unknown_file_problem__after_filename: "As for now, I will handle it as a written resource. But you really shouldn't do that.",
            session_name_taken_from_eaf: "Session name has been taken from EAF file name, since session has not been manually named yet.",
            session_date_extracted_from_eaf_file_name: "Session date has been extracted from EAF file name",
            at_least_2_sessions_to_assign_metadata: "There have to be at least 2 sessions to assign metadata from one to another.",
            session_1_metadata_assigned_to_all_sessions: "Session 1 metadata assigned to all sessions."
        },
        output: {
            xml_output: "XML Output",
            imdi: "IMDI",
            cmdi_with_imdi_profile: "CMDI with IMDI Profile",
            you_must_create_some_sessions_first: "You must create some sessions first!",
            every_session_must_have_a_project_name: "Every session must have a project name!",
            corpus_must_have_proper_name: "The corpus must have a proper name or no name at all.",
            sessions_must_have_proper_name: "Every session must have a proper name.<br>Unnamed sessions are not allowed.",
            download_corpus_including_all_sessions: "Download Corpus including all Sessions",
            download_zip_archive: "Download ZIP archive",
            not_allowed_chars_are: "Not allowed chars are: ",
            spaces_are_not_allowed_either: "Space characters are not allowed either.",
            sessions_must_have_name: "Your corpus contains unnamed sessions. Every session must have a name!",
            invalid_date_entered_in_session: 'You have entered an invalid date in a session (something like 2005-MM-DD). The corresponding XML element will contain the string "Unspecified".',
            invalid_birth_date_entered: 'You have entered an invalid birth date for an actor (something like 2005-MM-DD). The corresponding XML element will contain the string "Unspecified".',
            correct_or_ignore_warning: "Maybe you want to correct this. If not, ignore this warning."
        },
        session_form_comments: {
            name: "A short name or abbreviation of one or two words. This identifier distinguishes the session from others in the same (sub-) corpus and is used for quick browsing.",
            title: "The session title is the complete title of the session without any abbreviations.",
            date: "In general the primary date of the session is audio or video date. If this session is about written resources only it indicates the creation date of the primary document.",
            description: "Here a relevant description referring to the session as a whole can be given. Example: A conversation of mother, father and child at the breakfast table.",
            location: {
                continent: 'If the document is about "the languages of South-America", only Continent is supposed to be specified.',
                region: "This element can also be used to describe sub-regions. Examples: europe, the netherlands, gelderland, achterhoek.",
                address: "For instance if recording sessions took place at an institution, the address of the institute is meant."
            },
            project: {
                main: "If the session was made within the context of a project, the project element contains information regarding this project. This information is typically reused for many sessions and corpus leafs when they all belong to the same project.",
                name: "A short name or abbreviation of the project.",
                title: "The full title of the project.",
                id: "A unique identifier for the project.",
                description: "An elaborate description of the scope and goals of the project.",
                contact: "Contact information about the person or institution responsible for the project."
            },
            content: {
                main: "The content group is used to describe the content of the session. This is done using four dimensions (communication context, genre, task and modalities).",
                genre: "The conventionalized discourse types of the content of the session.",
                sub_genre: "The conventionalized discourse sub-types of the content of the session.",
                task: 'In areas such as language engineering often typical tasks are carried out or typical situations are dealt with such as "info kiosk task" or "frog story".',
                description: "In opposition to the elements prose text can be used here to describe the content.",
                communication_context: {
                    main: "This group of elements is used to describe the communication context in which the recording took place.",
                    event_structure: "Indicates the structure of the communication event.",
                    planning_type: "Indicates in how far the consultant planned the linguistic event.",
                    interactivity: "Characterizes the degree of interactivity between all the Actors in the session.",
                    social_context: "Indicates the social context the event took place in.",
                    involvement: "Indicates in how far the researcher was involved in the linguistic event."
                }
            },
            actors: {
                description: "This description concerns all Actors and should be used to describe interactions and interrelations between Actors."
            }
        },
        corpus_form_comments: {
            name: "A short archivable name of your corpus",
            title: "The complete and extensive title of your corpus"
        }
    }
}, imdi_environment.languages[1] = {
    id: "german",
    name: "Deutsch",
    terms: {
        workflow: {
            corpus: "Corpus",
            resources: "Resources",
            actors: "Actors",
            session: "Sessions",
            xml_output: "XML"
        },
        settings: {
            calculate_actors_age: "Automatische Altersberechnung von Actors",
            calculate_actors_age_description: "Wenn diese Funktion aktiviert ist, prüft CMDI Maker, ob das Alter eines Actors (wenn es noch nicht angegeben worden ist) aus dem Geburtsdatum des Actors und dem Datum der Session berechnet werden kann.<br>Wenn ein Alter berechnet werden kann, erscheint dieses in der generierten XML-Datei.<br>(Alter = Datum der Session - Geburtsdatum des Actors)",
            output_format: "Ausgabeformat",
            imdi: "IMDI",
            cmdi_with_imdi_profile: "CMDI mit IMDI-Profil",
            export_actors_as_json: "Actors als JSON exportieren",
            import_actors_from_json_or_imdi: "Actors von JSON oder IMDI importieren",
            import_actors_description: "Bitte importiere nur Dateien mit der Zeichenkodierung UTF-8!",
            delete_actors_database: "Alle Actors löschen",
            delete_actors_database_description: "CMDI Maker speichert all deine Actors in einer Browserdatenbank. Sie bleiben also erhalten, auch nachdem du den Browser geschlossen hast.",
            global_language_of_metadata: "Globale Metadaten-Sprache",
            cmdi_metadata_creator: "CMDI: Urheber der Metadaten",
            cmdi_metadata_creator_description: "Das CMDI-Metadatenformat setzt die Angabe eines Urhebers voraus. Das bist wahrscheinlich du! Gib in diesem Fall deinen Namen ein."
        },
        main: {
            reset_form: "Formular zurücksetzen",
            yes_delete_form: "Ja, Daten löschen",
            no: "Nein",
            really_reset_form: "Willst Du das wirklich?<br>Das Corpus und alle Sessions werden dabei gelöscht.",
            form_reset: "Formular zurückgesetzt",
            search: "Suchen",
            ok: "OK",
            function_currently_unavailable: "Diese Funktion ist derzeit nicht verfügbar!",
            warning: "WARNUNG:<br>",
            really_overwrite_data: "Möchtest Du wirklich Daten überschreiben?",
            yes_overwrite_data: "Ja, Daten überschreiben"
        },
        languages: {
            set_global_languages_of_content: "Globale Content Language hinzufügen",
            language_search: "Sprachsuche",
            language_name: "Sprachname",
            is_new_global: "ist neue globale Content Language",
            iso_code: "ISO-Code",
            not_found_in_db: "wurde nicht gefunden",
            specify_search_request_at_least_3_chars: "Bitte sei etwas genauer.\nGib mindestens 3 Zeichen ins Suchfeld ein.",
            primary_language: "Primärsprache",
            mother_tongue: "Muttersprache",
            current_content_languages: "Derzeitige Content Languages",
            content_language_removed__before_lang: 'Content Language "',
            content_language_removed__after_lang: '" entfernt',
            specify_local_used_language_name: "Gib den lokal benutzten Sprachnamen ein"
        },
        environment: {
            environment_signal: "IMDI",
            signal_msg: "Du benutzt das IMDI Profil v. "
        },
        resources: {
            compatibility_warnings: {
                general: "Diese Datei scheint keine valide Datei für LAMUS zu sein. Vielleicht sollte sie transkodiert werden.",
                invalid_media_file: "Diese Datei scheint keine valide Datei für LAMUS zu sein. Vielleicht sollte sie in WAV oder MP4 umgewandelt werden.",
                invalid_written_resource: "Diese Datei scheint keine valide Datei für LAMUS zu sein. Vielleicht sollte sie in PDF oder TXT umgewandelt werden."
            },
            unknown: "Unbekannt",
            create_one_session_per_file: "Eine Session pro Datei erstellen",
            files: "Dateien",
            selected_files: "Ausgewählte Dateien",
            sort_alphabetically: "Alphabetisch sortieren",
            remove: "Entfernen",
            clear_file_list: "Dateiliste löschen",
            usage: "Benutzung",
            click: "Klick",
            click_to_select: "Datei wird ausgewählt, noch ein Klick macht die Auswahl rückgängig",
            shift: "Shift",
            shift_to_select_multiple: "Halte Shift, um mehrere Dateien auf einmal auszuwählen",
            escape: "Escape",
            escape_to_deselect: "Alle Dateien werden deselektiert",
            size: "Größe",
            last_modified: "Letzte Änderung",
            no_resource_files_imported: "Keine Dateien importiert."
        },
        actors: {
            new_actor: "Neuer Actor",
            delete_this_actor: "Diesen Actor löschen",
            delete_all_actors: "Alle Actors löschen",
            sort_actors_alphabetically: "Alphabetisch sortieren",
            actors_alphabetically_sorted: "Actors sortiert",
            save_and_duplicate_this_actor: "Actor speichern und duplizieren",
            duplicate_this_actor: "Actor duplizieren",
            yes_delete_all_actors: "Ja, alle Actors löschen",
            no: "Nein",
            ok: "OK",
            confirm_erasing_actors_db: "Willst du das wirklich?<br>Die komplette Actors-Datenbank wird gelöscht.",
            all_actors_deleted: "Alle Actors wurden gelöscht.",
            save_actor: "Actor speichern",
            save_changes_to_this_actor: "Änderungen am Actor speichern",
            there_are_no_actors: "Es gibt keine Actors!",
            actors_imported: "Actors importiert",
            actor_saved_and_duplicated: "Actor gespeichert und dupliziert.",
            give_your_actor_a_name_first: "Bitte gib deinem Actor zuerst einen Namen!",
            yes_delete_actor: "Ja, Actor löschen",
            really_erase_before_name: "Willst Du wirklich ",
            really_erase_after_name: " löschen?",
            actor_deleted_before_name: "Actor ",
            actor_deleted_after_name: " gelöscht",
            there_are_no_actors_yet: "Es gibt noch keine Actors.",
            why_not_create_one__before_link: "Warum ",
            why_not_create_one__link: "erstellst",
            why_not_create_one__after_link: " du nicht einen?",
            please_give_all_actors_a_name_before_creating_new_one: "Bitte gib all deinen Actors einen Namen, bevor du einen neuen erstellst!",
            really_erase_this_actor: "Willst Du diesen Actor wirklich löschen?",
            unnamed_actor: "Unbenannter Actor"
        },
        session: {
            new_session: "Neue Session",
            copy_session_1_metadata: "Dupliziere Session-1-Metadaten in allen Sessions",
            reset_form: "Formular zurücksetzen",
            sort_by_name: "Nach Namen sortieren",
            add_to_session: "Hinzufügen",
            no_files_have_been_added: "Es wurden noch keine Dateien importiert.",
            add_some_files: "Importiere welche.",
            new_session_has_been_created: "Eine neue Session wurde erstellt.",
            name: "Name",
            unnamed_session: "Unbenannte Session",
            session: "Session",
            delete_session: "Session löschen",
            expand_session: "Session ausklappen",
            collapse_session: "Session minimieren",
            expand_collapse_session: "Session ausklappen/minimieren",
            no_actors_in_db_yet: "Es gibt noch keine Actors in der Datenbank.",
            create_some_actors: "Erstelle welche.",
            really_erase_session: "Willst du das wirklich?<br>Die komplette Session wird gelöscht!",
            yes_delete_session: "Ja, Session löschen",
            session_deleted: "Session gelöscht",
            this_corpus_contains_no_sessions_yet: "Dieses Korpus enthält noch keine Sessions.",
            why_not_create_one__before_link: "Warum ",
            why_not_create_one__link: "erstellst",
            why_not_create_one__after_link: " du nicht eine?",
            this_actor_is_already_in_the_session: "Dieser Actor existiert bereits in der Session.",
            unknown_file_problem__before_filename: "Es gibt ein Problem.<br>Ich weiß nicht, ob diese Datei ein Media File oder eine Written Resource ist:",
            unknown_file_problem__after_filename: "Ich werde sie erstmal als Written Resource behandeln. Aber sowas solltest du nicht tun.",
            session_name_taken_from_eaf: "Der Session-Name wurde vom Dateinamen der EAF-Datei übernommen, da die Session noch keinen Namen hatte.",
            session_date_extracted_from_eaf_file_name: "Das Datum der Session wurde aus dem Dateinamen der EAF-Datei extrahiert.",
            at_least_2_sessions_to_assign_metadata: "Es muss mindestens 2 Sessions geben, damit von einer Session in die andere kopiert werden können.",
            session_1_metadata_assigned_to_all_sessions: "Die Metadaten von Session 1 wurden in allen Sessions dupliziert."
        },
        output: {
            xml_output: "XML",
            imdi: "IMDI",
            cmdi_with_imdi_profile: "CMDI mit IMDI-Profil",
            you_must_create_some_sessions_first: "Du musst zuerst Sessions erstellen!",
            every_session_must_have_a_project_name: "Jede Session muss einen Project Name haben!",
            corpus_must_have_proper_name: "Das Corpus muss einen validen oder garkeinen Namen haben.",
            sessions_must_have_proper_name: "Jede Session muss einen validen Namen haben.<br>Unbenannte Sessions sind nicht erlaubt.",
            download_corpus_including_all_sessions: "Corpus inklusive aller Sessions herunterladen",
            download_zip_archive: "ZIP-Archiv herunterladen",
            not_allowed_chars_are: "Nicht erlaubte Zeichen sind: ",
            spaces_are_not_allowed_either: "Leerzeichen sind auch nicht erlaubt.",
            sessions_must_have_name: "Dein Korpus enthält unbenannte Sessions. Jede Session muss einen Namen haben!",
            invalid_date_entered_in_session: 'Eine oder mehrere Sessions enthalten ein invalides Datum (sowas wie 2005-MM-DD). Das entsprechende XML-Element wird den String "Unspecified" enthalten.',
            invalid_birth_date_entered: 'Eine oder mehrere Actors enthalten ein invalides BirthDate (sowas wie 2005-MM-DD). Das entsprechende XML-Element wird den String "Unspecified" enthalten.',
            correct_or_ignore_warning: "Vielleicht möchtest du das korrigieren. Falls nicht, ignoriere diese Warnung."
        },
        session_form_comments: {
            name: "Ein kurzer Name oder eine Abkürzung bestehend aus einem oder zwei Wörtern. Diese Kennung unterscheidet die Session von anderen im selben Korpus und wird beim schnellen Browsen genutzt.",
            title: 'Der "Session Title" ist der komplette Titel der Session ohne Abkürzungen.',
            date: "Im Allgemeinen ist das primäre Datum der Session das Datum der Aufzeichnungen. Wenn diese Session Written Resources enthält, steht hier das Erstellungsdatum des primären Dokumentes.",
            description: "Hier kann eine Beschreibung eingegeben werden, die die Session als Ganzes beschreibt: Beispiel: Eine Unterhaltung zwischen Mutter, Vater und Kind am Frühstückstisch.",
            location: {
                continent: 'Wenn es im Dokument um die "Sprachen von Südamerika" geht, sollte nur der Kontinent genannt werden.',
                region: "Dieses Element kann auch genutzt werden, um Sub-Regionen zu beschreiben. Beispiele: Europa, die Niederlande, Achterhoek.",
                address: "Falls die Aufnahmen beispielsweise in einem Institut gemacht worden sind, sollte hier die Adresse des Instituts eingegeben werden."
            },
            project: {
                main: 'Wenn die Session innerhalb eines Projektes erstellt worden ist, enthält das Element "Project" Informationen über das Projekt. Diese Informationen werden typischerweise für viele Sessions wiederverwendet, wenn diese alle zum gleichen Projekt gehören.',
                name: "Ein kurzer Name oder eine Abkürzung des Projektes.",
                title: "Der komplette und ausführliche Titel des Projektes.",
                id: "Eine eindeutige Kennung für das Projekt.",
                description: "Eine ausführliche Beschreibung über den Umfang des Projektes und über seine Ziele.",
                contact: "Kontaktinformationen der Person oder der Institution, die für das Projekt verantwortlich ist."
            },
            content: {
                main: 'Die "Content"-Spalte wird benutzt, um den Inhalt der Sessions zu beschreiben. Dies geschieht mit Hilfe der 4 Dimensionen "Communication Context", "Genre", "Task" und "Modalities".',
                genre: "Der konventionalisierte Typ des Inhalts der Session.",
                sub_genre: "Der konventionalisierte Sub-Typ des Inhalts der Session.",
                task: 'In Bereichen wie der Sprachdatenverarbeitung geht es oftmals um typische Aufgaben oder Situationen wie "info kiosk task" oder "frog story".',
                description: "Im Gegensatz zu den anderen Elementen, kann hier Volltext benutzt werden, um den Inhalt zu beschreiben.",
                communication_context: {
                    main: "Diese Gruppe von Elementen wird benutzt, um den Kontext der Kommunikation zu beschreiben, in dem die Aufnahme stattgefunden hat.",
                    event_structure: "Struktur des Kontextes der Kommunikation.",
                    planning_type: "Weist darauf hin, in wie weit der Referent das linguistische Ereignis geplant hat.",
                    interactivity: "Beschreibt den Grad der Interaktivität zwischen allen Actors in der Session.",
                    social_context: "Beschreibt den sozialen Kontext, in dem das Ereignis stattgefunden hat.",
                    involvement: "Beschreibt, in wie weit der Forscher in das Ereignis involviert war."
                }
            },
            actors: {
                description: "Diese Beschreibung betrifft alle Actors und sollte genutzt werden, um die Interaktionen und Beziehungen zwischen den Actors zu beschreiben."
            }
        },
        corpus_form_comments: {
            name: "Ein kurzer, archivierbarer Name für dein Korpus.",
            title: "Der komplette und ausführliche Titel deines Korpus."
        }
    }
}, imdi_environment.languages[2] = {
    id: "spanish",
    name: "Español",
    code: "es",
    terms: {
        workflow: {
            corpus: "Corpus",
            resources: "Recursos",
            actors: "Actores",
            session: "Sesiones",
            xml_output: "XML"
        },
        settings: {
            calculate_actors_age: "Calcular la edad del actor",
            calculate_actors_age_description: "Cuando esta función está activada, CMDI Maker controla si la edad del actor (si ésta no ha sido especificada todavía) puede ser calculada a través de la fecha de nacimiento del actor y de la fecha de la sesión.<br>Si la edad puede ser calculada, ésta aparecerá en el archivo de salida.<br>(Edad = Fecha de la sesión - Fecha de nacimiento del actor)",
            output_format: "Formato del archivo de salida",
            imdi: "IMDI",
            cmdi_with_imdi_profile: "CMDI con perfíl IMDI",
            export_actors_as_json: "Exportar actores como JSON",
            import_actors_from_json_or_imdi: "Importar actores desde JSON o IMDI",
            import_actors_description: "¡Por favor importar solamente archivos codificados en UTF-8!",
            delete_actors_database: "Eliminar actores",
            delete_actors_database_description: "CMDI Maker guarda todos sus actores en una base de datos de Web Storage, así que éstos quedarán guardados aun si se cierra la ventana del navegador.",
            global_language_of_metadata: "Lenguaje Global de Metadatos",
            cmdi_metadata_creator: "Creador de Metadatos CMDI",
            cmdi_metadata_creator_description: "El formato de metadatos CMDI requiere el nombre de un creador de metadatos. Éste, probablemente, es usted. Si lo es, escriba su nombre."
        },
        main: {
            reset_form: "Resetear formulario",
            yes_delete_form: "Sí, eliminar formulario",
            no: "No",
            really_reset_form: "¿Quieres realmente resetear el formulario y eliminar el corpus y todas sus sesiones?",
            form_reset: "Reseteo del formulario",
            search: "Buscar",
            ok: "OK",
            function_currently_unavailable: "¡Esta función no está actualmente disponible!"
        },
        languages: {
            set_global_languages_of_content: "Establecer Content Language global",
            language_search: "Buscar lengua",
            result: "resultado",
            results: "resultados",
            language_name: "Nombre de la lengua",
            is_new_global: "es un nuevo Content Language global",
            iso_code: "Código ISO",
            not_found_in_db: "no se encontró en la base de datos",
            specify_search_request_at_least_3_chars: "Por favor especifique su búsqueda.\nIngrese por lo menos 3 caracteres.",
            primary_language: "Lengua principal",
            mother_tongue: "Lengua materna",
            current_content_languages: "Content Languages corrientes",
            content_language_removed__before_lang: 'Content Language "',
            content_language_removed__after_lang: '" eliminada',
            specify_local_used_language_name: "Especificar el nombre del idioma usado local"
        },
        environment: {
            environment_signal: "IMDI",
            signal_msg: "Estas utilizando el perfil IMDI v. "
        },
        resources: {
            compatibility_warnings: {
                general: "Este archivo multimedia no es un archivo  de recursos válido para LAMUS. Por favor intente convertir su código.",
                invalid_media_file: "Este archivo multimedia no es un archivo  de recursos válido para LAMUS. Por favor intente convertir su código en formato WAV (audio) o en MP4 (video).",
                invalid_written_resource: "Este archivo multimedia no es un archivo  de recursos válido para LAMUS. Por favor intente convertir su código en formato PDF o en TXT."
            },
            unknown: "Desconocido",
            create_one_session_per_file: "Crear una sesión para cada archivo",
            files: "Archivos",
            selected_files: "Archivos seleccionados",
            sort_alphabetically: "Ordenar los archivo alfabéticamente",
            remove: "Eliminar",
            clear_file_list: "Quitar lista de archivos",
            usage: "Uso",
            click: "Pulsar",
            click_to_select: "Seleccionar recurso, pulsar otra vez para deseleccionar un solo recurso",
            shift: "Shift",
            shift_to_select_multiple: "Mantener pulsada la tecla Shift para seleccionar varios recursos",
            escape: "Escape",
            escape_to_deselect: "Pulsar escape para deseleccionar todos los recursos",
            size: "Tamaño",
            last_modified: "Modificado la última vez",
            no_resource_files_imported: "No se importó ningún archivo de recursos."
        },
        actors: {
            new_actor: "Nuevo actor",
            delete_this_actor: "Eliminar este actor",
            delete_all_actors: "Eliminar todos los actores",
            sort_actors_alphabetically: "Ordenar actores alfabéticamente",
            actors_alphabetically_sorted: "Actores ordenados",
            save_and_duplicate_this_actor: "Guardar y duplicar este actor",
            duplicate_this_actor: "Duplicar este actor",
            yes_delete_all_actors: "Sí, eliminar todos los actores",
            no: "No",
            ok: "OK",
            confirm_erasing_actors_db: "¿Quiere realmente eliminar la base de datos de los actores por completo?",
            all_actors_deleted: "Se eliminaron todos los actores",
            save_actor: "Guardar actor",
            save_changes_to_this_actor: "Guardar los cambios hechos a este actor",
            there_are_no_actors: "¡No hay actores!",
            actors_imported: "se importaron los actores",
            actor_saved_and_duplicated: "Actor guardado y duplicado.",
            give_your_actor_a_name_first: "Por favor, primero dé un nombre a su actor.",
            yes_delete_actor: "Sí, eliminar actor",
            really_erase_before_name: "¿Quiere realmente eliminar ",
            really_erase_after_name: " ?",
            actor_deleted_before_name: "Actor ",
            actor_deleted_after_name: " eliminado",
            there_are_no_actors_yet: "Todavía no hay actores.",
            why_not_create_one__before_link: "¿Por qué no ",
            why_not_create_one__link: "crear",
            why_not_create_one__after_link: "uno?",
            please_give_all_actors_a_name_before_creating_new_one: "Por favor dé un nombre a todos los actores antes de crear uno nuevo.",
            really_erase_this_actor: "¿Quiere realmente eliminar este actor?",
            unnamed_actor: "Actor sin nombre"
        },
        session: {
            new_session: "Nueva sesión",
            copy_session_1_metadata: "Copiar los metadatos de la Sesión 1 a todas las sesiones",
            reset_form: "Resetear formulario",
            sort_by_name: "Ordenar según el nombre",
            add_to_session: "Añadir a la sesión",
            no_files_have_been_added: "No se añadió ningún archivo.",
            add_some_files: "Añadir unos archivos.",
            new_session_has_been_created: "Se creó una nueva sesión.",
            name: "Nombre",
            unnamed_session: "Sesión sin nombre",
            session: "Sesión",
            delete_session: "Eliminar sesión",
            expand_session: "Extender sesión",
            collapse_session: "Doblar sesión",
            expand_collapse_session: "Extender/doblar sesión",
            no_actors_in_db_yet: "Todavía no hay actores en la base de datos.",
            create_some_actors: "Crear unos actores.",
            really_erase_session: "¿Quiere realmente eliminar una sesión entera? Está seguro?",
            yes_delete_session: "Sí, eliminar sesión",
            session_deleted: "Sesión eliminada",
            this_corpus_contains_no_sessions_yet: "Todavía no hay sesiones en este corpus.",
            why_not_create_one__before_link: "¿Porque no ",
            why_not_create_one__link: "crear una",
            why_not_create_one__after_link: "?",
            this_actor_is_already_in_the_session: "Este actor ya está en la sesión.",
            unknown_file_problem__before_filename: "Tenemos un problema.<br>No sé si este archivo es un archivo multimedia o un recurso escrito:",
            unknown_file_problem__after_filename: "Por ahora lo voy a considerar un recurso escrito. Pero no deberías volver a hacerlo.",
            session_name_taken_from_eaf: "El nombre de la sesión viene del nombre del archivo EAF, porque todavía no se le ha dado ningún nombre.",
            session_date_extracted_from_eaf_file_name: "La fecha de la sesión viene del nombre del archivo EAF.",
            at_least_2_sessions_to_assign_metadata: "Hay que haber por lo menos 2 sesiones para asignar los metadatos de una a otra.",
            session_1_metadata_assigned_to_all_sessions: "Se asignaron los metadatos de la Sesión 1 a todas las sesiones."
        },
        output: {
            xml_output: "XML",
            imdi: "IMDI",
            cmdi_with_imdi_profile: "CMDI con perfíl IMDI",
            you_must_create_some_sessions_first: "¡Primero debe crear unas sesiones!",
            every_session_must_have_a_project_name: "¡Cada sesión debe tener un nombre de proyecto!",
            corpus_must_have_proper_name: "El corpus debe tener un nombre adecuado, o no tener ningún nombre.",
            sessions_must_have_proper_name: "Cada sesión debe tener un nombre adecuado.<br>Las sesiones sin nombre no están permitidas.",
            download_corpus_including_all_sessions: "Bajar corpus junto con todas las sesiones",
            download_zip_archive: "Bajar archivo ZIP",
            not_allowed_chars_are: "No se admiten: ",
            spaces_are_not_allowed_either: void 0
        },
        session_form_comments: {
            name: "Un nombre corto o la abreviatura de una o dos palabras. Este identificador permite distinguir una sesión de las otras en el mismo (sub-) corpus y se utiliza para facilitar la navegación.",
            title: "El título de la sesión es el título completo de la sesión sin ninguna abreviatura.",
            date: "En general, la fecha principal de la sesión es la fecha de un archivo audio o video. Si la sesión incluye solamente recursos escritos, ésta indicará la fecha de creación del documento principal.",
            description: "Aquí se puede proporcionar una descripción relacionada con la sesión entera. Ejemplo: Conversación entre la madre, el padre y el hijo a la mesa desayunando.",
            location: {
                continent: 'Si el documento está relacionado con "las lenguas de Sur América", se debe especificar solamente la voz Continent.',
                region: "Este elemento se puede utilizar también para describir sub-regiones. Ejemplos: Europa, Paises Bajos, Gelderland, Achterhoek.",
                address: "Por ejemplo si las sesiones de grabación ocurrieron en un instituto, entonces se requiere la dirección de ese instituto."
            },
            project: {
                main: "Si una sesión se creó dentro de un proyecto, habrá unas informaciones relacionadas con este proyecto. Estas informaciones suelen ser recicladas para varias sesiones y varios corpora si estos pertenecen al mismo proyecto. ",
                name: "Un nombre corto o una abreviatura del proyecto.",
                title: "El título completo del proyecto.",
                id: "Un identificador único para el proyecto.",
                description: "Una descripción elaborada del ámbito y de los objetivos del proyecto.",
                contact: "Informaciones de contacto de la persona o del instituto responsable del proyecto."
            },
            content: {
                main: "El grupo de contenido se usa para describir el contenido de la sesión. Esto se hace a través de cuatro dimensiones (contexto de la comunicación, género, tarea y modalidades).",
                genre: "Los tipos de discurso convencionalizados del contenido de la sesión.",
                sub_genre: "Los sub-tipos de discurso convencionalizados del contenido de una sesión.",
                task: 'En áreas como ingeniería del lenguaje se suelen tener típicas tareas o situaciones como por ejemplo "info kiosk task" o bien "frog story".',
                description: "Por el contrario, el texto en prosa se puede utilizar para describir el contenido.",
                communication_context: {
                    main: "Este grupo de elementos se utiliza para describir el contexto de comunicación en el que se hizo la grabación.",
                    event_structure: "Indica la estructura del evento comunicativo.",
                    planning_type: "Indica cuanto el consultor planeó el evento lingüístico.",
                    interactivity: "Caracteriza el grado de interacción entre todos los actores de la sesión.",
                    social_context: "Indica el contexto social en el que ocurrió el evento.",
                    involvement: "Indica cuanto el investigador estaba involucrado en el evento lingüístico."
                }
            },
            actors: {
                description: "La descripción se refiere a todos los actores y debería utilizarse para describir las interacciones y las interrelaciones entre los actores."
            }
        },
        corpus_form_comments: {
            name: "Un nombre corto y archivable de su corpus.",
            title: "El título completo y extenso de su corpus."
        }
    }
}, imdi_environment.languages[3] = {
    id: "russian",
    name: "Русский язык",
    terms: {
        workflow: {
            corpus: "Корпус",
            resources: "Ресурсы",
            actors: "Участники",
            session: "Сессии",
            xml_output: "Готовый XML"
        },
        settings: {
            calculate_actors_age: "Вычислять возраст участников",
            calculate_actors_age_description: "Когда эта опция включена, CMDI Maker проверяет, можно ли вычислить возраст участника (если он ещё не указан) по дате рождения и дате сессии.<br>Если возраст вычислить можно, он появится в выходном файле.<br>(Возраст = Дата сессии - Дата рождения участника)",
            output_format: "Выходной формат",
            imdi: "IMDI",
            cmdi_with_imdi_profile: "CMDI с профилем IMDI",
            export_actors_as_json: "Экспортировать участников в JSON",
            import_actors_from_json_or_imdi: "Импортировать участников из JSON или IMDI",
            import_actors_description: "Пожалуйста, импортируйте только файлы в кодировке UTF-8!",
            delete_actors_database: "Удалить участников",
            delete_actors_database_description: "CMDI Maker сохраняет всех участников в базе данных браузера, так что они не пропадут, даже если закрыть окно браузера."
        },
        main: {
            reset_form: "Очистить форму",
            yes_delete_form: "Да, очистить форму",
            no: "Нет",
            really_reset_form: "Точно?<br>Вы хотите очистить форму, удалить корпус и все сессии?",
            form_reset: "Очистить форму",
            search: "Поиск",
            ok: "ОК",
            function_currently_unavailable: "Функция сейчас недоступна!"
        },
        languages: {
            set_global_languages_of_content: "Установить общие языки для содержимого",
            language_search: "Поиск языков",
            result: "результат",
            results: "результата (-ов)",
            language_name: "Название языка",
            is_new_global: "установлен как общий язык содержимого",
            iso_code: "Код ISO",
            not_found_in_db: "в базе данных не обнаружен",
            specify_search_request_at_least_3_chars: "Пожалуйста, уточните запрос.\nНаберите по крайней мере 3 буквы.",
            primary_language: "Основной язык",
            mother_tongue: "Родной язык",
            current_content_languages: "Текущие языки содержимого",
            content_language_removed__before_lang: 'Язык содержания "',
            content_language_removed__after_lang: '" исключён.'
        },
        resources: {
            compatibility_warnings: {}
        },
        actors: {},
        session: {},
        output: {},
        session_form_comments: {
            location: {},
            project: {},
            content: {
                communication_context: {}
            },
            actors: {}
        },
        corpus_form_comments: {}
    }
}, imdi_environment.imdi_generator = function(e, n) {
    "use strict";
    var t = imdi_environment.workflow[1],
        o = !1,
        s = !1,
        i = function() {
            var e = APP.CONF.LanguageCodePrefix;
            return e += g("metadata_language_select").options[g("metadata_language_select").options.selectedIndex].value
        },
        a = function(e, n) {
            e = dates.getDateStringByDateObject(e), n = dates.getDateStringByDateObject(n);
            var t = dates.calcAgeAtDate(e, n);
            return void 0 !== t && 0 !== t ? (log("Actor's age successfully calculated"), t) : (log("Actor's age could not be calculated. result = " + t), "Unspecified")
        },
        r = function(e, t, s, r) {
            f.header(), _("SESSION", APP.CONF.originator, "1.0", dates.today()), f.open("Session"), f.element("Name", e.session.name), f.element("Title", e.session.title), f.element("Date", dates.getDateStringByDateObject(e.session.date) || "Unspecified"), dates.isUserDefinedDateInvalid(e.session.date) && 0 == o && (APP.alert(n("warning") + n("output", "invalid_date_entered_in_session") + "<br>" + n("output", "correct_or_ignore_warning")), o = !0), f.element("Description", e.session.description, [
                ["LanguageId", i()],
                ["Link", ""]
            ]), f.open("MDGroup"), f.open("Location"), f.element("Continent", e.session.location.continent, [
                ["Link", "http://www.mpi.nl/IMDI/Schema/Continents.xml"],
                ["Type", "ClosedVocabulary"]
            ]), f.element("Country", e.session.location.country, [
                ["Link", "http://www.mpi.nl/IMDI/Schema/Countries.xml"],
                ["Type", "OpenVocabulary"]
            ]), f.element("Region", e.session.location.region), f.element("Address", e.session.location.address), f.close("Location"), f.open("Project"), f.element("Name", e.project.name), f.element("Title", e.project.title), f.element("Id", e.project.id), f.open("Contact"), f.element("Name", e.project.contact.name), f.element("Address", e.project.contact.address), f.element("Email", e.project.contact.email), f.element("Organisation", e.project.contact.organisation), f.close("Contact"), f.element("Description", e.project.description, [
                ["LanguageId", i()],
                ["Link", ""]
            ]), f.close("Project"), f.open("Keys"), f.close("Keys"), c(e.content, r), f.open("Actors"), f.element("Description", e.actors.description, [
                ["LanguageId", i()],
                ["Link", ""]
            ]), forEach(e.actors.actors, function(n) {
                var o = getObjectByID(t, n);
                "" === o.age && g("radio_age_calc").on && (o.age = a(e.session.date, o.birth_date)), "" === o.age && (o.age = "Unspecified"), u(o)
            }), f.close("Actors"), f.close("MDGroup"), f.open("Resources"), forEach(e.resources.resources.mediaFiles, function(e) {
                m(e.name, e.size)
            }), forEach(e.resources.resources.writtenResources, function(e) {
                d(e.name, e.size)
            }), f.close("Resources"), f.element("References", ""), f.close("Session"), f.close("METATRANSCRIPT")
        },
        c = function(e, n) {
            f.open("Content"), f.element("Genre", e.genre, [
                ["Link", "http://www.mpi.nl/IMDI/Schema/Content-Genre.xml"],
                ["Type", "OpenVocabulary"]
            ]), f.element("SubGenre", e.subgenre, [
                ["Link", "http://www.mpi.nl/IMDI/Schema/Content-SubGenre.xml"],
                ["Type", "OpenVocabularyList"]
            ]), f.element("Task", e.task, [
                ["Link", "http://www.mpi.nl/IMDI/Schema/Content-Task.xml"],
                ["Type", "OpenVocabulary"]
            ]), f.element("Modalities", "", [
                ["Link", "http://www.mpi.nl/IMDI/Schema/Content-Modalities.xml"],
                ["Type", "OpenVocabulary"]
            ]), f.element("Subject", "", [
                ["Link", "http://www.mpi.nl/IMDI/Schema/Content-Subject.xml"],
                ["Type", "OpenVocabularyList"]
            ]), f.open("CommunicationContext"), f.element("Interactivity", e.communication_context.interactivity, [
                ["Link", "http://www.mpi.nl/IMDI/Schema/Content-Interactivity.xml"],
                ["Type", "ClosedVocabulary"]
            ]), f.element("PlanningType", e.communication_context.planningtype, [
                ["Link", "http://www.mpi.nl/IMDI/Schema/Content-PlanningType.xml"],
                ["Type", "ClosedVocabulary"]
            ]), f.element("Involvement", e.communication_context.involvement, [
                ["Link", "http://www.mpi.nl/IMDI/Schema/Content-Involvement.xml"],
                ["Type", "ClosedVocabulary"]
            ]), f.element("SocialContext", e.communication_context.socialcontext, [
                ["Link", "http://www.mpi.nl/IMDI/Schema/Content-SocialContext.xml"],
                ["Type", "ClosedVocabulary"]
            ]), f.element("EventStructure", e.communication_context.eventstructure, [
                ["Link", "http://www.mpi.nl/IMDI/Schema/Content-EventStructure.xml"],
                ["Type", "ClosedVocabulary"]
            ]), f.element("Channel", "", [
                ["Link", "http://www.mpi.nl/IMDI/Schema/Content-Channel.xml"],
                ["Type", "ClosedVocabulary"]
            ]), f.close("CommunicationContext"), f.open("Languages"), f.element("Description", "", [
                ["LanguageId", i()],
                ["Link", ""]
            ]), l(n), f.close("Languages"), f.element("Keys", ""), f.element("Description", e.description, [
                ["LanguageId", i()],
                ["Link", ""]
            ]), f.close("Content")
        },
        l = function(e) {
            forEach(e, function(e) {
                f.open("Language"), f.element("Id", APP.CONF.LanguageCodePrefix + e[0]), f.element("Name", e[3], [
                    ["Link", "http://www.mpi.nl/IMDI/Schema/MPI-Languages.xml"],
                    ["Type", "OpenVocabulary"]
                ]), f.element("Description", "", [
                    ["LanguageId", i()],
                    ["Link", ""]
                ]), f.close("Language")
            })
        },
        _ = function(e, n, t, o) {
            return f.open("METATRANSCRIPT", [
                ["xmlns", "http://www.mpi.nl/IMDI/Schema/IMDI"],
                ["xmlns:xsi", "http://www.w3.org/2001/XMLSchema-instance"],
                ["Date", o],
                ["FormatId", "IMDI 3.04"],
                ["Originator", n],
                ["Type", e],
                ["Version", t],
                ["xsi:schemaLocation", "http://www.mpi.nl/IMDI/Schema/IMDI http://www.mpi.nl/IMDI/Schema/IMDI_3.0.xsd"]
            ])
        },
        d = function(e, n) {
            f.open("WrittenResource"), f.element("ResourceLink", e), f.element("MediaResourceLink", ""), f.element("Date", "Unspecified"), f.element("Type", t.getFileType(e).type, [
                ["Link", "http://www.mpi.nl/IMDI/Schema/WrittenResource-Type.xml"],
                ["Type", "OpenVocabulary"]
            ]), f.element("SubType", t.getFileType(e).type, [
                ["Link", "http://www.mpi.nl/IMDI/Schema/WrittenResource-SubType.xml"],
                ["Type", "OpenVocabularyList"]
            ]), f.element("Format", t.getFileType(e).mimetype, [
                ["Link", "http://www.mpi.nl/IMDI/Schema/WrittenResource-Format.xml"],
                ["Type", "OpenVocabulary"]
            ]), f.element("Size", n), f.open("Validation"), f.element("Type", "", [
                ["Link", "http://www.mpi.nl/IMDI/Schema/Validation-Type.xml"],
                ["Type", "ClosedVocabulary"]
            ]), f.element("Methodology", "", [
                ["Link", "http://www.mpi.nl/IMDI/Schema/Validation-Methodology.xml"],
                ["Type", "ClosedVocabulary"]
            ]), f.element("Level", "Unspecified"), f.element("Description", "", [
                ["LanguageId", i()],
                ["Link", ""]
            ]), f.close("Validation"), f.element("Derivation", "", [
                ["Link", "http://www.mpi.nl/IMDI/Schema/WrittenResource-Derivation.xml"],
                ["Type", "ClosedVocabulary"]
            ]), f.element("CharacterEncoding", ""), f.element("ContentEncoding", ""), f.element("LanguageId", ""), f.element("Anonymized", "Unspecified", [
                ["Link", "http://www.mpi.nl/IMDI/Schema/Boolean.xml"],
                ["Type", "ClosedVocabulary"]
            ]), f.open("Access"), f.element("Availability", ""), f.element("Date", ""), f.element("Owner", ""), f.element("Publisher", ""), f.open("Contact"), f.element("Name", ""), f.element("Address", ""), f.element("Email", ""), f.element("Organisation", ""), f.close("Contact"), f.element("Description", "", [
                ["LanguageId", i()],
                ["Link", ""]
            ]), f.close("Access"), f.element("Description", "", [
                ["LanguageId", i()],
                ["Link", ""]
            ]), f.element("Keys", ""), f.close("WrittenResource")
        },
        m = function(e, n) {
            f.open("MediaFile"), f.element("ResourceLink", e), f.element("Type", t.getFileType(e).type, [
                ["Link", "http://www.mpi.nl/IMDI/Schema/MediaFile-Type.xml"],
                ["Type", "ClosedVocabulary"]
            ]), f.element("Format", t.getFileType(e).mimetype, [
                ["Link", "http://www.mpi.nl/IMDI/Schema/MediaFile-Format.xml"],
                ["Type", "OpenVocabulary"]
            ]), f.element("Size", n), f.element("Quality", "Unspecified", [
                ["Link", "http://www.mpi.nl/IMDI/Schema/Quality.xml"],
                ["Type", "ClosedVocabulary"]
            ]), f.element("RecordingConditions", ""), f.open("TimePosition"), f.element("Start", "Unspecified"), f.element("End", "Unspecified"), f.close("TimePosition"), f.open("Access"), f.element("Availability", ""), f.element("Date", ""), f.element("Owner", ""), f.element("Publisher", ""), f.open("Contact"), f.element("Name", ""), f.element("Address", ""), f.element("Email", ""), f.element("Organisation", ""), f.close("Contact"), f.element("Description", "", [
                ["LanguageId", i()],
                ["Link", ""]
            ]), f.close("Access"), f.element("Description", "", [
                ["LanguageId", i()],
                ["Link", ""]
            ]), f.element("Keys", ""), f.close("MediaFile")
        },
        u = function(e) {
            f.open("Actor"), f.element("Role", e.role, [
                ["Link", "http://www.mpi.nl/IMDI/Schema/Actor-Role.xml"],
                ["Type", "OpenVocabularyList"]
            ]), f.element("Name", e.name), f.element("FullName", e.full_name), f.element("Code", e.code), f.element("FamilySocialRole", e.family_social_role, [
                ["Link", "http://www.mpi.nl/IMDI/Schema/Actor-FamilySocialRole.xml"],
                ["Type", "OpenVocabularyList"]
            ]), f.open("Languages"), f.element("Description", "", [
                ["LanguageId", i()],
                ["Link", ""]
            ]), forEach(e.languages.actor_languages, function(e) {
                f.open("Language"), f.element("Id", APP.CONF.LanguageCodePrefix + e.iso_code), f.element("Name", e.name, [
                    ["Link", "http://www.mpi.nl/IMDI/Schema/MPI-Languages.xml"],
                    ["Type", "OpenVocabulary"]
                ]), f.element("MotherTongue", e.MotherTongue ? "true" : "false", [
                    ["Link", "http://www.mpi.nl/IMDI/Schema/Boolean.xml"],
                    ["Type", "ClosedVocabulary"]
                ]), f.element("PrimaryLanguage", e.PrimaryLanguage ? "true" : "false", [
                    ["Link", "http://www.mpi.nl/IMDI/Schema/Boolean.xml"],
                    ["Type", "ClosedVocabulary"]
                ]), f.element("Description", "", [
                    ["LanguageId", i()],
                    ["Link", ""]
                ]), f.close("Language")
            }), f.close("Languages"), f.element("EthnicGroup", e.ethnic_group), f.element("Age", e.age), f.element("BirthDate", dates.getDateStringByDateObject(e.birth_date) || "Unspecified"), dates.isUserDefinedDateInvalid(e.birth_date) && 0 == s && (APP.alert(n("warning") + n("output", "invalid_birth_date_entered") + "<br>" + n("output", "correct_or_ignore_warning")), s = !0), f.element("Sex", e.sex, [
                ["Link", "http://www.mpi.nl/IMDI/Schema/Actor-Sex.xml"],
                ["Type", "ClosedVocabulary"]
            ]), f.element("Education", "" != e.education ? e.education : "Unspecified"), f.element("Anonymized", e.anonymized ? "true" : "false", [
                ["Link", "http://www.mpi.nl/IMDI/Schema/Boolean.xml"],
                ["Type", "ClosedVocabulary"]
            ]), f.open("Contact"), f.element("Name", e.contact.name), f.element("Address", e.contact.address), f.element("Email", e.contact.email), f.element("Organisation", e.contact.organisation), f.close("Contact"), f.element("Keys", ""), f.element("Description", e.description, [
                ["LanguageId", i()],
                ["Link", ""]
            ]), f.close("Actor")
        },
        p = {};
    p.sessions = [];
    var f = new XMLString;
    return function(e, n) {
        f.header(), _("CORPUS", APP.CONF.originator, "1.0", dates.today()), f.open("Corpus"), f.element("Name", e.name), f.element("Title", e.title), f.element("Description", e.description, [
            ["LanguageId", i()]
        ]);
        for (var t = 0; t < n.length; t++) f.element("CorpusLink", n[t].session.name + ".imdi", [
            ["Name", n[t].session.name]
        ]);
        f.close("Corpus"), f.close("METATRANSCRIPT")
    }(e.corpus, e.sessions), p.corpus = f.getString(), forEach(e.sessions, function(n) {
        f = new XMLString, r(n, e.actors, e.resources, e.content_languages), p.sessions.push(f.getString())
    }), p
}, imdi_environment.cmdi_generator = function(e, n) {
    "use strict";
    var t, o, s = imdi_environment,
        i = !1,
        a = !1,
        r = s.workflow[1],
        c = (s.workflow[2], function() {
            return "res_" + strings.randomString(8, "0123456789abcdefghijklmnopqrstuvwxyz") + "_" + strings.randomString(4, "0123456789abcdefghijklmnopqrstuvwxyz") + "_" + strings.randomString(4, "0123456789abcdefghijklmnopqrstuvwxyz") + "_" + strings.randomString(4, "0123456789abcdefghijklmnopqrstuvwxyz") + "_" + strings.randomString(12, "0123456789abcdefghijklmnopqrstuvwxyz")
        }),
        l = function(e, n) {
            e = dates.getDateStringByDateObject(e), n = dates.getDateStringByDateObject(n);
            var t = dates.calcAgeAtDate(e, n);
            return void 0 !== t && 0 !== t ? (log("Actor's age successfully calculated"), t) : (log("Actor's age could not be calculated. result = " + t), "Unspecified")
        },
        _ = function(e) {
            var n;
            if (0 === e || "corpus" === e) n = "clarin.eu:cr1:p_1274880881885";
            else {
                if (1 !== e && "session" !== e) return APP.error("An error has occurred! Cannot insert CMDI header without knowing if session or corpus is wanted.");
                n = "clarin.eu:cr1:p_1271859438204"
            }
            return w.open("CMD", [
                ["xmlns", "http://www.clarin.eu/cmd/"],
                ["xmlns:xsi", "http://www.w3.org/2001/XMLSchema-instance"],
                ["CMDVersion", "1.1"],
                ["xsi:schemaLocation", "http://www.clarin.eu/cmd/ http://catalog.clarin.eu/ds/ComponentRegistry/rest/registry/profiles/" + n + "/xsd "]
            ])
        },
        d = function(e, n, t) {
            w.open("Header"), w.element("MdCreator", e), w.element("MdCreationDate", n), w.element("MdProfile", t), w.close("Header")
        },
        m = function(e) {
            var n = [];
            if (e.length > 0)
                for (var o = 0; o < e.length; o++) n.push(c()), w.open("ResourceProxy", [
                    ["id", n[o]]
                ]), w.element("ResourceType", "Resource", [
                    ["mimetype", r.getFileType(e[o].name).mimetype]
                ]), w.element("ResourceRef", e[o].name), w.close("ResourceProxy"), t = e[o].name + " " + n[o], e[o].idref = n[o]
        },
        u = function(e) {
            var n = [];
            if (e.length > 0)
                for (var t = 0; t < e.length; t++) n.push(c()), w.open("ResourceProxy", [
                    ["id", n[t]]
                ]), w.element("ResourceType", "Resource", [
                    ["mimetype", r.getFileType(e[t].name).mimetype]
                ]), w.element("ResourceRef", e[t].name), w.close("ResourceProxy"), o = e[t].name + " " + n[t], e[t].idref = n[t]
        },
        p = function(e, t, o) {
            w.open("Session"), w.element("Name", t.session.name), w.element("Title", t.session.title), w.element("Date", dates.getDateStringByDateObject(t.session.date) || "Unspecified"), dates.isUserDefinedDateInvalid(t.session.date) && 0 == i && (APP.alert(n("warning") + n("output", "invalid_date_entered_in_session") + "<br>" + n("output", "correct_or_ignore_warning")), i = !0), w.open("MDGroup"), w.open("Location");
            var s = t.session.location.continent;
            "" == s ? w.element("Continent", "Unspecified") : w.element("Continent", s), w.element("Country", t.session.location.country), w.element("Region", t.session.location.region), w.element("Address", t.session.location.address), w.close("Location"), w.open("Project"), w.element("Name", t.project.name), w.element("Title", t.project.title), w.element("Id", t.project.id), w.open("Contact"), w.element("Name", t.project.contact.name), w.element("Address", t.project.contact.address), w.element("Email", t.project.contact.email), w.element("Organisation", t.project.contact.organisation), w.close("Contact"), w.close("Project"), w.element("Keys", ""), w.open("Content"), w.element("Genre", t.content.genre), w.element("SubGenre", t.content.subgenre), w.element("Task", t.content.task), w.element("Modalities", ""), w.element("Subject", ""), w.open("CommunicationContext"), w.element("Interactivity", t.content.communication_context.interactivity), w.element("PlanningType", t.content.communication_context.planningtype), w.element("Involvement", t.content.communication_context.involvement), w.element("SocialContext", t.content.communication_context.socialcontext), w.element("EventStructure", t.content.communication_context.eventstructure), w.element("Channel", "Unknown"), w.close("CommunicationContext"), w.open("Content_Languages"), f(e), w.close("Content_Languages"), w.element("Keys", ""), w.close("Content"), w.open("Actors"), w.open("descriptions"), w.element("Description", t.actors.description), w.close("descriptions"), forEach(t.actors.actors, function(e) {
                var n = getObjectByID(o, e);
                "" === n.age && g("radio_age_calc").on && (n.age = l(t.session.date, n.birth_date)), "" === n.age && (n.age = "Unspecified"), y(n)
            }), w.close("Actors"), w.close("MDGroup"), w.open("Resources");
            for (var a = 0; a < t.resources.resources.mediaFiles.length; a++) v(t.resources.resources.mediaFiles[a]);
            for (var a = 0; a < t.resources.resources.writtenResources.length; a++) h(t.resources.resources.writtenResources[a]);
            w.close("Resources"), w.close("Session")
        },
        f = function(e) {
            for (var n = 0; n < e.length; n++) w.open("Content_Language"), w.element("Id", APP.CONF.LanguageCodePrefix + e[n][0]), w.element("Name", e[n][3]), w.close("Content_Language")
        },
        h = function(e) {
            u(e), w.open("WrittenResource", [
                ["ref", e.idref]
            ]), w.element("ResourceLink", e.name), w.element("MediaResourceLink", ""), w.element("Date", "Unspecified"), w.element("Type", r.getFileType(e.name).type), w.element("SubType", r.getFileType(e.name).type), w.element("Format", r.getFileType(e.name).mimetype), w.element("Size", e.size), w.element("Derivation", "Unspecified"), w.element("CharacterEncoding", ""), w.element("ContentEncoding", ""), w.element("LanguageId", ""), w.element("Anonymized", "Unspecified"), w.open("Validation"), w.element("Type", "Unspecified"), w.element("Methodology", "Unspecified"), w.element("Level", "Unspecified"), w.element("descriptions", ""), w.close("Validation"), w.open("Access"), w.element("Availability", ""), w.element("Date", ""), w.element("Owner", ""), w.element("Publisher", ""), w.open("Contact"), w.element("Name", ""), w.element("Address", ""), w.element("Email", ""), w.element("Organisation", ""), w.close("Contact"), w.element("descriptions", ""), w.close("Access"), w.element("descriptions", ""), w.element("Keys", ""), w.close("WrittenResource")
        },
        v = function(e) {
            m(e), w.open("MediaFile", [
                ["ref", e.idref]
            ]), w.element("ResourceLink", e.name), w.element("Type", r.getFileType(e.name).type), w.element("Format", r.getFileType(e.name).mimetype), w.element("Size", e.size), w.element("Quality", "Unspecified"), w.element("RecordingConditions", ""), w.open("TimePosition"), w.element("Start", "Unspecified"), w.element("End", "Unspecified"), w.close("TimePosition"), w.open("Access"), w.element("Availability", ""), w.element("Date", ""), w.element("Owner", ""), w.element("Publisher", ""), w.open("Contact"), w.element("Name", ""), w.element("Address", ""), w.element("Email", ""), w.element("Organisation", ""), w.close("Contact"), w.close("Access"), w.element("Keys", ""), w.close("MediaFile")
        },
        y = function(e) {
            w.open("Actor"), w.element("Role", e.role), w.element("Name", e.name), w.element("FullName", e.full_name), w.element("Code", e.code), w.element("FamilySocialRole", e.family_social_role), w.element("EthnicGroup", e.ethnic_group), w.element("Age", e.age), w.element("BirthDate", dates.getDateStringByDateObject(e.birth_date) || "Unspecified"), dates.isUserDefinedDateInvalid(e.birth_date) && 0 == a && (APP.alert(n("warning") + n("output", "invalid_birth_date_entered") + "<br>" + n("output", "correct_or_ignore_warning")), a = !0), w.element("Sex", e.sex), w.element("Education", "" !== e.education ? e.education : "Unspecified"), w.element("Anonymized", e.anonymized ? "true" : "false"), w.open("Contact"), w.element("Name", e.contact.name), w.element("Address", e.contact.address), w.element("Email", e.contact.email), w.element("Organisation", e.contact.organisation), w.close("Contact"), w.element("Keys", ""), w.open("descriptions"), w.element("Description", e.description), w.close("descriptions"), w.open("Actor_Languages"), forEach(e.languages.actor_languages, function(e) {
                w.open("Actor_Language"), w.element("Id", APP.CONF.LanguageCodePrefix + e.iso_code), w.element("Name", e.name), w.element("MotherTongue", e.MotherTongue ? "true" : "false"), w.element("PrimaryLanguage", e.PrimaryLanguage ? "true" : "false"), w.close("Actor_Language")
            }), w.close("Actor_Languages"), w.close("Actor")
        },
        b = {};
    b.sessions = [];
    var w = new XMLString;
    ! function(e, n) {
        var t = [];
        if (w.header(), _("corpus"), d(get("metadata_creator"), dates.today() + dates.getTimezoneOffsetInHours(), "clarin.eu:cr1:p_1274880881885"), w.open("Resources"), n.length > 0) {
            w.open("ResourceProxyList");
            for (var o = 0; o < n.length; o++) t.push(c()), w.open("ResourceProxy", [
                ["id", t[o]]
            ]), w.element("ResourceType", "Metadata", [
                ["mimetype", "application/x-cmdi+xml"]
            ]), w.element("ResourceRef", n[o].session.name + ".cmdi"), w.close("ResourceProxy");
            w.close("ResourceProxyList")
        } else w.element("ResourceProxyList", "");
        w.element("JournalFileProxyList", ""), w.element("ResourceRelationList", ""), w.close("Resources"), w.open("Components");
        var s = t.join(" ");
        w.open("imdi-corpus", [
            ["ref", s]
        ]), w.open("Corpus"), w.element("Name", get("corpus_name")), w.element("Title", get("corpus_title")), w.close("Corpus"), w.close("imdi-corpus"), w.close("Components"), w.close("CMD")
    }(e.corpus, e.sessions), b.corpus = w.getString();
    for (var A = 0; A < e.sessions.length; A++) w = new XMLString,
        function(e, n, t) {
            w.header(), _("session"), d(get("metadata_creator"), dates.today() + dates.getTimezoneOffsetInHours(), "clarin.eu:cr1:p_1271859438204"), w.open("Resources");
            var o = n.resources.resources.mediaFiles,
                s = n.resources.resources.writtenResources;
            o.length > 0 || s.length > 0 ? (w.open("ResourceProxyList"), m(o), u(s), w.close("ResourceProxyList")) : w.element("ResourceProxyList", ""), w.element("JournalFileProxyList", ""), w.element("ResourceRelationList", ""), w.close("Resources"), w.open("Components"), p(e, n, t), w.close("Components"), w.close("CMD")
        }(e.content_languages, e.sessions[A], e.actors), b.sessions.push(w.getString());
    return b
}, imdi_environment.session_form = function() {
    var e = imdi_environment.l;
    return {
        title: "imdi-form",
        type: "form",
        fields: [{
            title: "Session",
            name: "session",
            type: "column",
            fields: [{
                heading: "Name",
                name: "name",
                type: "text",
                comment: e("session_form_comments", "name"),
                allowed_chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-",
                replace_accent_bearing_letters_with_asci_substitute: !0
            }, {
                heading: "Title",
                name: "title",
                type: "text",
                comment: e("session_form_comments", "title")
            }, {
                heading: "Date",
                name: "date",
                type: "date",
                comment: e("session_form_comments", "date")
            }, {
                heading: "Description",
                name: "description",
                type: "textarea",
                comment: e("session_form_comments", "description")
            }, {
                heading: "Location",
                name: "location",
                type: "subarea",
                fields: [{
                    heading: "Continent",
                    name: "continent",
                    type: "select",
                    size: 1,
                    vocabulary: ["Unknown", "Unspecified", "Africa", "Asia", "Europe", "Australia", "Oceania", "North-America", "Middle-America", "South-America"],
                    default_value: "Unspecified",
                    comment: e("session_form_comments", "location", "continent")
                }, {
                    heading: "Country",
                    name: "country",
                    type: "text",
                    comment: ""
                }, {
                    heading: "Region",
                    name: "region",
                    type: "text",
                    comment: e("session_form_comments", "location", "region")
                }, {
                    heading: "Address",
                    name: "address",
                    type: "text",
                    comment: e("session_form_comments", "location", "address")
                }]
            }]
        }, {
            title: "Project",
            name: "project",
            type: "column",
            comment: e("session_form_comments", "project", "main"),
            fields: [{
                heading: "Name",
                name: "name",
                type: "text",
                comment: e("session_form_comments", "project", "name")
            }, {
                heading: "Title",
                name: "title",
                type: "text",
                comment: e("session_form_comments", "project", "title")
            }, {
                heading: "ID",
                name: "id",
                type: "text",
                comment: e("session_form_comments", "project", "id")
            }, {
                heading: "Description",
                name: "description",
                type: "textarea",
                comment: e("session_form_comments", "project", "description")
            }, {
                heading: "Contact",
                name: "contact",
                type: "subarea",
                comment: e("session_form_comments", "project", "contact"),
                fields: [{
                    heading: "Name",
                    name: "name",
                    type: "text",
                    comment: e("session_form_comments", "project", "contact")
                }, {
                    heading: "Address",
                    name: "address",
                    type: "text",
                    comment: e("session_form_comments", "project", "contact")
                }, {
                    heading: "Email",
                    name: "email",
                    type: "text",
                    comment: e("session_form_comments", "project", "contact")
                }, {
                    heading: "Organisation",
                    name: "organisation",
                    type: "text",
                    comment: e("session_form_comments", "project", "contact")
                }]
            }]
        }, {
            title: "Content",
            name: "content",
            type: "column",
            comment: e("session_form_comments", "content", "main"),
            fields: [{
                heading: "Genre",
                name: "genre",
                type: "open_vocabulary",
                size: 1,
                vocabulary: ["Unknown", "Unspecified", "Discourse", "Ritual/religious texts", "Fiction", "Newspaper article", "Radio/TV feature", "Drama", "Singing", "Instrumental music", "Poetry", "Literature", "Secondary document", "Personal notes", "Stimuli"],
                comment: e("session_form_comments", "content", "genre"),
                default_value: "Unspecified"
            }, {
                heading: "Sub Genre",
                type: "text",
                name: "subgenre",
                comment: e("session_form_comments", "content", "sub_genre")
            }, {
                heading: "Task",
                name: "task",
                type: "open_vocabulary",
                size: 1,
                vocabulary: ["Unknown", "Unspecified", "info-kiosk", "travel-planning", "room reservation", "frog story", "pear story"],
                comment: e("session_form_comments", "content", "task"),
                default_value: "Unspecified"
            }, {
                heading: "Description",
                name: "description",
                type: "textarea",
                comment: e("session_form_comments", "content", "description")
            }, {
                heading: "Communication Context",
                name: "communication_context",
                type: "subarea",
                comment: e("session_form_comments", "content", "communication_context", "main"),
                fields: [{
                    heading: "Event Structure",
                    name: "eventstructure",
                    type: "select",
                    size: 1,
                    vocabulary: ["Unknown", "Unspecified", "Monologue", "Dialogue", "Conversation", "Not a natural format"],
                    comment: e("session_form_comments", "content", "communication_context", "event_structure"),
                    default_value: "Unspecified"
                }, {
                    heading: "Planning Type",
                    name: "planningtype",
                    type: "select",
                    size: 1,
                    vocabulary: ["Unknown", "Unspecified", "spontaneous", "semi-spontaneous", "planned"],
                    comment: e("session_form_comments", "content", "communication_context", "planning_type"),
                    default_value: "Unspecified"
                }, {
                    heading: "Interactivity",
                    name: "interactivity",
                    type: "select",
                    size: 1,
                    vocabulary: ["Unknown", "Unspecified", "interactive", "non-interactive", "semi-interactive"],
                    comment: e("session_form_comments", "content", "communication_context", "interactivity"),
                    default_value: "Unspecified"
                }, {
                    heading: "Social Context",
                    name: "socialcontext",
                    type: "select",
                    size: 1,
                    vocabulary: ["Unknown", "Unspecified", "Family", "Private", "Public", "Controlled environment"],
                    comment: e("session_form_comments", "content", "communication_context", "social_context"),
                    default_value: "Unspecified"
                }, {
                    heading: "Involvement",
                    name: "involvement",
                    type: "select",
                    size: 1,
                    vocabulary: ["Unknown", "Unspecified", "elicited", "non-elicited", "no-observer"],
                    comment: e("session_form_comments", "content", "communication_context", "involvement"),
                    default_value: "Unspecified"
                }]
            }]
        }, {
            title: "Actors",
            type: "column",
            name: "actors",
            fields: [{
                heading: "Description of Actors",
                type: "textarea",
                comment: e("session_form_comments", "actors", "description"),
                name: "description"
            }, {
                type: "special",
                name: "actors",
                object_structure: "array"
            }]
        }, {
            title: "Resources",
            name: "resources",
            type: "column",
            fields: [{
                type: "special",
                name: "resources",
                object_structure: "object",
                object_arrays: ["writtenResources", "mediaFiles"]
            }]
        }],
        fields_to_copy: [{
            name: "date",
            label: "Date",
            fields: ["session_date"]
        }, {
            name: "location",
            label: "Location",
            fields: ["session_location"]
        }, {
            name: "project",
            label: "Project",
            fields: ["project"]
        }, {
            name: "content",
            label: "Content",
            fields: ["content"]
        }, {
            name: "actors",
            label: "Actors",
            fields: ["actors_description"]
        }]
    }
}, imdi_environment.actor_form = {
    title: "imdi-actors",
    type: "form",
    fields: [{
        type: "column",
        fields: [{
            heading: "Name",
            name: "name",
            type: "text",
            comment: "Name of the actor as used by others in the transcription"
        }, {
            heading: "Full Name",
            name: "full_name",
            type: "text",
            comment: "Official name of the actor"
        }, {
            heading: "Code",
            name: "code",
            type: "text",
            comment: "Short unique code to identify the actor as used in the transcription"
        }, {
            heading: "Birth Date",
            name: "birth_date",
            type: "date"
        }, {
            heading: "Age",
            name: "age",
            type: "text",
            allowed_chars: "0123456789"
        }, {
            heading: "Sex",
            name: "sex",
            type: "select",
            vocabulary: ["Unknown", "Unspecified", "NAP", "Female", "Male"],
            default_value: "Unspecified"
        }, {
            heading: "Education",
            name: "education",
            type: "text"
        }]
    }, {
        title: "",
        name: "",
        type: "column",
        fields: [{
            heading: "Role",
            name: "role",
            type: "open_vocabulary",
            vocabulary: ["Unknown", "Unspecified", "Annotator", "Author", "Collector", "Consultant", "Computer", "Depositor", "Editor", "Filmer", "Illustrator", "Interviewer", "Musician", "Photographer", "Publisher", "Recorder", "Referent", "Researcher", "Singer", "Speaker/Signer", "Translator"],
            default_value: "Unspecified",
            comment: "Functional role of the actor e.g. consultant, contributor, interviewer, researcher, publisher, collector, translator"
        }, {
            heading: "Ethnic Group",
            name: "ethnic_group",
            type: "text"
        }, {
            heading: "Family Social Role",
            name: "family_social_role",
            type: "open_vocabulary",
            vocabulary: ["Unknown", "Unspecified", "Father", "Mother", "Sibling", "Boss", "Partner", "Student", "Teacher", "Shaman/Priest", "Mayor", "Doctor"],
            default_value: "Unspecified"
        }, {
            heading: "Description of the actor",
            name: "description",
            type: "textarea"
        }, {
            heading: "Anonymized",
            name: "anonymized",
            type: "check",
            comment: "Indicates if real names or anonymized codes are used to identify the actor"
        }]
    }, {
        title: "Contact",
        name: "contact",
        type: "column",
        fields: [{
            heading: "Name",
            name: "name",
            type: "text"
        }, {
            heading: "Address",
            name: "address",
            type: "text"
        }, {
            heading: "Email",
            name: "email",
            type: "text"
        }, {
            heading: "Organisation",
            name: "organisation",
            type: "text"
        }]
    }, {
        title: "Languages",
        name: "languages",
        type: "column",
        fields: [{
            heading: "Actor Languages",
            name: "actor_languages",
            type: "special",
            object_structure: "array"
        }]
    }]
}, imdi_environment.corpus_form = function() {
    var e = imdi_environment.l;
    return {
        type: "form",
        fields: [{
            heading: "Name",
            name: "name",
            comment: e("corpus_form_comments", "name"),
            type: "text",
            allowed_chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-"
        }, {
            heading: "Title",
            name: "title",
            comment: e("corpus_form_comments", "title"),
            type: "text"
        }, {
            heading: "Description",
            name: "description",
            type: "textarea"
        }]
    }
}, imdi_environment.workflow[0] = function() {
    var e = {};
    e.parent = imdi_environment;
    var n;
    return e.form_id_prefix = "corpus_", e.reset = function() {
        APP.forms.fill(n, e.form_id_prefix), e.content_languages.removeAll()
    }, e.identity = {
        id: "corpus",
        title: "Corpus",
        icon: "box"
    }, e.l = e.parent.l, e.init = function(t) {
        n = e.parent.corpus_form();
        var o = dom.make("div", "corpus_form", "", t);
        dom.make("h1", "", "", o, "Corpus"), APP.forms.make(o, n, e.form_id_prefix, e.form_id_prefix);
        var s = g(e.form_id_prefix + "name");
        s.addEventListener("input", function() {
            if (!g("preserve_hyphens").on && -1 != s.value.indexOf("-")) return APP.log("Hyphens are not allowed in the corpus name!", "error"), s.value = strings.removeCharactersFromString(s.value, "-"), !1
        }), e.content_languages.init(t)
    }, e.functions = function() {
        return [{
            id: "environment_signal",
            icon: "textedit",
            label: e.l("environment", "signal"),
            onclick: function() {
                e.signalNotification()
            }
        }]
    }, e.signalNotification = function() {
        APP.log(e.l("environment", "signal_msg") + imdi_environment.version)
    }, e.recall = function(t) {
        APP.forms.fill(n, e.form_id_prefix, t), e.content_languages.recall(t.content_languages)
    }, e.getSaveData = function() {
        var t = APP.forms.makeObjectWithFormData(n, e.form_id_prefix);
        return t.content_languages = e.content_languages.getSaveData(), t
    }, e.isCorpusProperlyNamed = function() {
        if ("" == get(e.form_id_prefix + "name")) return !1;
        for (var n = 0; n < e.parent.not_allowed_chars.length; n++)
            if (-1 != get(e.form_id_prefix + "name").indexOf(e.parent.not_allowed_chars[n])) return !1;
        return !0
    }, e
}(), imdi_environment.workflow[0].content_languages = function() {
    var e, n = function() {
            g("content_languages_display").innerHTML = "", t.content_languages.forEach(t.render)
        },
        t = {};
    return t.content_languages = new ObjectList, t.parent = imdi_environment, t.l = t.parent.l, t.init = function(n) {
        e = imdi_environment.workflow[0];
        var o = dom.make("div", "content_languages", "", n),
            s = dom.div(o, "lang_search_div", "");
        dom.h1(s, t.l("languages", "set_global_languages_of_content")), APP.GUI.makeLanguageSearchForm(s, "content_language_", !0, !0, t.choose);
        var i = dom.div(o, "content_languages_wrapper", "");
        dom.h1(i, t.l("languages", "current_content_languages")), dom.div(i, "content_languages_display", "")
    }, t.recall = function(e) {
        t.content_languages.setState(e, !0), n()
    }, t.getSaveData = function() {
        return t.content_languages.getState()
    }, t.choose = function(e) {
        t.set(e) && APP.log('"' + e[3] + '" ' + t.l("languages", "is_new_global"))
    }, t.set = function(e) {
        var o = cloneObject(e);
        return t.content_languages.add(o), n(), !0
    }, t.render = function(e) {
        var o = e.id,
            s = dom.make("div", "content_language_" + o + "_div", "content_language_entry", g("content_languages_display"));
        if (dom.span(s, "", "", "ISO639-3 Code: " + e[0]), APP.GUI.icon(s, "delete_lang_" + o + "_icon", "delete_lang_icon", "reset").addEventListener("click", function(e) {
                return function() {
                    t.content_languages.removeByID(e), n()
                }
            }(o)), dom.br(s), "LOCAL" === e[2]) {
            dom.span(s, "", "", "Name: ");
            var i = "" !== e[3] ? e[3] : t.l("languages", "specify_local_used_language_name");
            dom.textInput(s, "content_language_" + o + "_name_input", "imdi_corpus_lang_name_input", "", i), dom.br(s), dom.span(s, "", "", "Country ID:")
        } else dom.spanBR(s, "", "", "Name: " + e[3]), dom.span(s, "", "", "Country ID: " + e[1])
    }, t.removeAll = function() {
        t.content_languages.reset(), n()
    }, t
}(), imdi_environment.workflow[1] = function() {
    "use strict";
    var e, n = {};
    n.resources = new ObjectList, n.identity = {
        id: "resources",
        title: "Resources",
        icon: "blocks"
    }, n.view_id = "VIEW_resources", n.substitute_for_bad_chars = "_", n.view = function() {
        APP.GUI.scrollTop()
    }, n.parent = imdi_environment;
    var t = n.parent.l;
    return n.addCompatibilityWarning = function(e, n) {
        var t = dom.div(e, "", "warning_div"),
            o = dom.div(t, "", "warning_img_div");
        APP.GUI.icon(o, "", "warning_icon", "warning"), dom.div(t, "", "compatibility_warning", n)
    }, n.getFileType = function(e) {
        e = e.toLowerCase();
        var o = n.file_types,
            s = e.lastIndexOf("."),
            i = e.slice(s + 1),
            r = {
                type: t("resources", "unknown"),
                mimetype: t("resources", "unknown")
            },
            c = a(o.valid_lamus_written_resource_file_types, 0),
            l = c.indexOf(i);
        return -1 != c.indexOf(i) ? (r.type = o.valid_lamus_written_resource_file_types[l][2], r.mimetype = o.valid_lamus_written_resource_file_types[l][1], r) : (c = a(o.valid_lamus_media_file_types, 0), l = c.indexOf(i), -1 != c.indexOf(i) ? (r.type = o.valid_lamus_media_file_types[l][2], r.mimetype = o.valid_lamus_media_file_types[l][1], r) : (c = a(o.invalid_lamus_media_file_types, 0), -1 != (l = c.indexOf(i)) ? (r.type = o.invalid_lamus_media_file_types[l][2], r.mimetype = o.invalid_lamus_media_file_types[l][1], r) : (c = a(o.invalid_lamus_written_resource_file_types, 0), l = c.indexOf(i), -1 != l ? (r.type = o.invalid_lamus_written_resource_file_types[l][2], r.mimetype = o.invalid_lamus_written_resource_file_types[l][1], r) : r)))
    }, n.file_types = {
        valid_lamus_written_resource_file_types: [
            ["eaf", "text/x-eaf+xml", "Annotation"],
            ["mdf", "Unknown", "Unspecified"],
            ["pdf", "application/pdf", "Primary Text"],
            ["xml", "text/xml", "Annotation"],
            ["txt", "text/plain", "Unspecified"],
            ["htm", "text/html", "Unspecified"],
            ["html", "text/html", "Unspecified"]
        ],
        valid_lamus_media_file_types: [
            ["wav", "audio/x-wav", "audio"],
            ["wave", "audio/x-wav", "audio"],
            ["mpg", "video/mpeg", "video"],
            ["mpeg", "video/mpeg", "video"],
            ["mp4", "video/mp4", "video"],
            ["aif", "audio/x-aiff", "audio"],
            ["aiff", "audio/x-aiff", "audio"],
            ["jpg", "image/jpeg", "image"],
            ["jpeg", "image/jpeg", "image"],
            ["png", "image/png", "image"],
            ["tif", "image/tiff", "image"],
            ["tiff", "image/tiff", "image"],
            ["smil", "application/smil+xml", "video"]
        ],
        invalid_lamus_written_resource_file_types: [
            ["docx", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "Unspecified"],
            ["doc", "application/msword", "Unspecified"],
            ["odf", "application/vnd.oasis.opendocument.formula", "Unspecified"],
            ["odt", "application/vnd.oasis.opendocument.text", "Unspecified"],
            ["xls", "application/vnd.ms-excel", "Unspecified"],
            ["xlsx", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "Unspecified"],
            ["ppt", "application/vnd.ms-powerpoint", "Unspecified"],
            ["pptx", "application/vnd.openxmlformats-officedocument.presentationml.presentation", "Unspecified"]
        ],
        invalid_lamus_media_file_types: [
            ["mkv", "Unknown", "video"],
            ["mov", "video/quicktime", "video"],
            ["mp3", "Unknown", "audio"],
            ["avi", "video/x-msvideo", "video"],
            ["au", "audio/basic", "audio"]
        ]
    }, n.recall = function(e) {
        n.resources.setState(e, !0), n.refresh()
    }, n.getSaveData = function() {
        return n.resources.getState()
    }, n.functions = function() {
        return [{
            label: t("resources", "create_one_session_per_file"),
            icon: "plus",
            id: "crps_icon",
            wrapper_id: "crps_div",
            type: "function_wrap",
            sub_div: "crps_filetype_select",
            onclick: function() {
                n.createSessionPerResource(), APP.view(e)
            },
            sub_div_innerHTML: '<h3 class="inner_function_h3">' + t("resources", "files") + '</h3><input type="radio" name="radio_file_type" value="selected" checked> ' + t("resources", "selected_files") + '<br><input type="radio" name="radio_file_type" value="eaf"> EAF<br><input type="radio" name="radio_file_type" value="wav"> WAV<br><input type="radio" name="radio_file_type" value="mpg"> MPG<br><input type="radio" name="radio_file_type" value="mp4"> MP4<br>'
        }, {
            id: "link_sort_alphabetically",
            icon: "az",
            label: t("resources", "sort_alphabetically"),
            onclick: function() {
                n.resources.sortByKey("name"), n.refresh()
            }
        }, {
            id: "link_remove_files",
            icon: "reset",
            label: t("resources", "remove"),
            onclick: function() {
                n.removeSelectedFiles()
            }
        }, {
            id: "link_clear_file_list",
            icon: "reset",
            label: t("resources", "clear_file_list"),
            onclick: function() {
                n.resources.reset(), n.refresh()
            }
        }, {
            id: "environment_signal",
            icon: "textedit",
            label: t("environment", "signal"),
            onclick: function() {
                n.signalNotification()
            }
        }]
    }, n.init = function(o) {
        e = imdi_environment.workflow[3];
        var s = dom.make("div", "files", "", o),
            i = (APP.GUI.FORMS.fileDropZone(s, "drop_zone", n.pushFileMetadata), dom.make("div", "", "workspace-usageTable", s, "<h3>" + t("resources", "usage") + "</h3><h4>" + t("resources", "click") + "</h4><p>" + t("resources", "click_to_select") + "</p><h4>" + t("resources", "shift") + "</h4><p>" + t("resources", "shift_to_select_multiple") + "</p><h4>" + t("resources", "escape") + "</h4><p>" + t("resources", "escape_to_deselect") + "</p>"), dom.make("div", "file_list_div", "", o));
        dom.make("div", "list", "", i);
        n.fileSelection = new APP.GUI.selectionMechanism("file_entry_", "selected_file", function(e) {
            n.resources.get(e.index).selected = e.selected
        }), n.refresh(!0)
    }, n.signalNotification = function() {
        APP.log(n.l("environment", "signal_msg") + imdi_environment.version)
    }, n.getValidityOfFile = function(e) {
        var o, s = strings.getFileTypeFromFilename(e);
        for (o = 0; o < n.file_types.valid_lamus_media_file_types.length; o++)
            if (s == n.file_types.valid_lamus_media_file_types[o][0]) return {
                type: "Media File",
                comptaibility_warning: void 0,
                file_entry_class: "media_file_entry"
            };
        for (o = 0; o < n.file_types.valid_lamus_written_resource_file_types.length; o++)
            if (s == n.file_types.valid_lamus_written_resource_file_types[o][0]) return {
                type: "Written Resource",
                comptaibility_warning: void 0,
                file_entry_class: "written_resource_file_entry"
            };
        for (o = 0; o < n.file_types.invalid_lamus_media_file_types.length; o++)
            if (s == n.file_types.invalid_lamus_media_file_types[o][0]) return {
                type: "Media File",
                compatibility_warning: t("resources", "compatibility_warnings", "invalid_media_file"),
                file_entry_class: "media_file_entry"
            };
        for (o = 0; o < n.file_types.invalid_lamus_written_resource_file_types.length; o++)
            if (s == n.file_types.invalid_lamus_written_resource_file_types[o][0]) return {
                type: "Written Resource",
                compatibility_warning: t("resources", "compatibility_warnings", "invalid_written_resource"),
                file_entry_class: "written_resource_file_entry"
            };
        return {
            type: "Unknown",
            compatibility_warning: t("resources", "compatibility_warnings", "general"),
            file_entry_class: "invalid_file_entry"
        }
    }, n.refresh = function(o) {
        var s, i = g("list");
        i.innerHTML = "", n.resources.forEach(function(e, t) {
            s = n.getValidityOfFile(e.name), n.renderResource(t, e.name, e.mime_type, e.size, e.lastModified, "file_entry_" + t, "file_entry " + s.file_entry_class, i, s.compatibility_warning)
        }), 0 === n.resources.length && dom.h2(i, t("resources", "no_resource_files_imported")), e && !o && e.refreshResourcesOfAllSessions(), n.fileSelection.selected_files = []
    }, n.renderResource = function(e, o, s, i, a, r, c, l, _) {
        var d = dom.make("div", r, c, l),
            o = dom.make("h2", "", "file_entry_title", d, o);
        dom.make("p", "", "", d, s + '<br><span class="size_span">' + t("resources", "size") + ": " + i + '</span><br><span name="date_span" class="date_span">' + t("resources", "last_modified") + ": " + a + "</span>");
        void 0 !== _ && n.addCompatibilityWarning(d, _), d.addEventListener("click", function(e) {
            return function() {
                n.fileSelection.clickedOnFile(e)
            }
        }(e), !1)
    }, n.pushFileMetadata = function(e) {
        for (var t, o = 0; t = e[o]; o++) n.resources.add({
            name: t.name,
            mime_type: t.type || "n/a",
            size: strings.bytesToSize(t.size, 1),
            lastModified: t.lastModified
        });
        n.refresh()
    }, n.createSessionPerResource = function() {
        var e, t = document.getElementsByName("radio_file_type");
        if ("selected" == (e = dom.getSelectedRadioValue(t))) return void forEach(n.fileSelection.selected_files, function(e) {
            var t = n.resources.idOf(e);
            n.createSessionForResource(t)
        });
        n.resources.forEach(function(t) {
            strings.getFileTypeFromFilename(t.name) == e && n.createSessionForResource(t.id)
        })
    }, n.removeSelectedFiles = function() {
        var e = n.fileSelection.selected_files,
            t = n.resources.mapIndexesToIDs(e);
        n.resources.removeByID(t), n.refresh()
    }, n.createSessionForResource = function(t) {
        var o = strings.replaceAccentBearingLettersWithASCISubstitute(strings.removeEndingFromFilename(n.resources.getByID(t).name));
        o = strings.replaceCharactersInStringWithSubstitute(o, n.parent.not_allowed_chars, n.substitute_for_bad_chars);
        var s = n.resources.getByID(t),
            i = [];
        i.push(t);
        for (var a = 0; a < n.resources.length; a++) n.resources.indexOf(t) != a && strings.isSubstringAStartOfAWordInString(strings.removeEndingFromFilename(n.resources.get(a).name), strings.removeEndingFromFilename(s.name)) && i.push(a);
        e.createNewSessionWithResources(o, !1, i)
    }, n
}(), imdi_environment.workflow[2] = function() {
    "use strict";
    var e, n = function(n) {
            g(l.element_id_prefix + "list") || (l.module_view.innerHTML = "", l.createListDIV(l.module_view)), g(l.element_id_prefix + "list").innerHTML = "", l.actors.forEach(d), 0 == l.actors.length ? (l.showNoActorsMessage(), APP.environments.disableFunction("link_delete_active_actor"), APP.environments.disableFunction("link_sort_actors_alphabetically"), APP.environments.disableFunction("link_duplicateActiveActor")) : (o(l.actors.getActiveIndex()), l.show(l.actors.getPointer()), APP.environments.enableFunction("link_delete_active_actor"), APP.environments.enableFunction("link_sort_actors_alphabetically"), APP.environments.enableFunction("link_duplicateActiveActor")), e && !n && e.refreshActorLists(l.actors.getAll())
        },
        t = function() {
            forEach(l.actors.getActive().languages.actor_languages, l.languages.set)
        },
        o = function(e) {
            if (void 0 !== e) {
                for (var n = 0; n < l.actors.length; n++) g(l.element_id_prefix + "list_entry_" + n).style.background = l.unhighlightColor;
                g(l.element_id_prefix + "list_entry_" + e).style.background = l.highlightColor
            }
        },
        s = function() {
            var e = APP.forms.createEmptyObjectFromTemplate(_);
            return APP.forms.fillObjectWithFormData(e, l.element_id_prefix, _), l.languages.refreshLanguagesOfActiveActorInArray(), e.languages.actor_languages = cloneObject(l.languages.LOAA.getAll()), e
        },
        i = function(e) {
            var n = e.getElementsByTagName("Actor");
            return map(n, function(e) {
                var n = {
                        name: e.querySelector("Name").textContent.trim(),
                        role: e.querySelector("Role").textContent.trim(),
                        full_name: e.querySelector("FullName").textContent.trim(),
                        code: e.querySelector("Code").textContent.trim(),
                        age: e.querySelector("Age").textContent.trim(),
                        sex: e.querySelector("Sex").textContent.trim(),
                        education: e.querySelector("Education").textContent.trim(),
                        birth_date: parse_birth_date(e.querySelector("BirthDate").textContent.trim()),
                        ethnic_group: e.querySelector("EthnicGroup").textContent.trim(),
                        family_social_role: e.querySelector("FamilySocialRole").textContent.trim(),
                        description: e.querySelector("Description").textContent.trim(),
                        contact: {
                            name: e.querySelector("Contact").querySelector("Name").textContent.trim(),
                            address: e.querySelector("Contact").querySelector("Address").textContent.trim(),
                            email: e.querySelector("Contact").querySelector("Email").textContent.trim(),
                            organisation: e.querySelector("Contact").querySelector("Organisation").textContent.trim()
                        },
                        anonymized: "true" == e.querySelector("Anonymized").textContent.trim(),
                        languages: []
                    },
                    t = e.querySelector("Languages");
                return forEach(t.children, function(e) {
                    if ("Language" == e.nodeName) {
                        var t = {
                            LanguageObject: [e.querySelector("Id").textContent.trim().slice(9), "?", "?", e.querySelector("Name").textContent.trim()],
                            MotherTongue: "true" == e.querySelector("MotherTongue").textContent.trim(),
                            PrimaryLanguage: "true" == e.querySelector("PrimaryLanguage").textContent.trim()
                        };
                        n.languages.push(t)
                    }
                }), n
            })
        },
        a = function(e) {
            l.saveActiveActor(), l.show(l.actors.idOf(e))
        },
        r = function(e, n) {
            return l.parent.l("actors", e, n)
        },
        c = function() {
            return !l.actors.isThereAnyItemWhereKeyIsValue("name", "")
        },
        l = {};
    l.parent = imdi_environment;
    var _ = l.parent.actor_form;
    l.actors = new ObjectList, l.element_id_prefix = "actor_", l.highlightColor = "#FF8BC7", l.unhighlightColor = "lightskyblue", l.identity = {
        id: "actor",
        title: "Actors",
        icon: "user"
    }, l.module_view, l.init = function(t) {
        l.actors.reset(), l.module_view = t, e = l.parent.workflow[3], dom.div(t, l.element_id_prefix + "view", ""), l.languages.init(t), n(!0)
    }, l.createListDIV = function(e) {
        dom.make("div", l.element_id_prefix + "list", "", e)
    }, l.getSaveData = function() {
        return l.saveActiveActor(), l.actors.getState()
    }, l.showNoActorsMessage = function() {
        var e = l.module_view;
        e.innerHTML = "";
        var n = dom.make("h2", "no_actors_text", "no_actors_text", e);
        n.innerHTML = r("there_are_no_actors_yet") + " " + r("why_not_create_one__before_link"), dom.make("a", "new_actor_link", "new_actor_link", n).innerHTML = r("why_not_create_one__link"), n.innerHTML += r("why_not_create_one__after_link"), g("new_actor_link").addEventListener("click", function() {
            l.createNewActor()
        })
    }, l.recall = function(e) {
        e.actors ? (log("actor legacy data:"), log(e.actors), l.actors.setState(e.actors, !0), l.actors.forEach(function(e) {
            if (Array.isArray(e.languages)) {
                var n = e.languages;
                e.languages = {}, e.languages.actor_languages = n
            }
            forEach(e.languages.actor_languages, function(e) {
                e.name = e.LanguageObject[3], e.iso_code = e.LanguageObject[0], e.type = e.LanguageObject[2], e.country_code = e.LanguageObject[1]
            })
        })) : l.actors.setState(e), n(), l.show(l.actors.getPointer())
    }, l.functions = function() {
        return [{
            id: "link_new_actor",
            icon: "plus",
            label: r("new_actor"),
            onclick: function() {
                l.createNewActor()
            }
        }, {
            id: "link_delete_active_actor",
            icon: "reset",
            label: r("delete_this_actor"),
            onclick: function() {
                l.handleClickOnDeleteActor()
            }
        }, {
            id: "link_sort_actors_alphabetically",
            icon: "az",
            label: r("sort_actors_alphabetically"),
            onclick: function() {
                l.actors.sortByKey("name"), n(), APP.log(r("actors_alphabetically_sorted"))
            }
        }, {
            id: "link_duplicateActiveActor",
            icon: "duplicate_user",
            label: r("duplicate_this_actor"),
            onclick: function() {
                l.duplicateActiveActor()
            }
        }, {
            id: "link_eraseAll",
            icon: "reset",
            label: r("delete_all_actors"),
            onclick: function() {
                l.eraseAll()
            }
        }, {
            id: "environment_signal",
            icon: "textedit",
            label: r("signal"),
            onclick: function() {
                l.signalNotification()
            }
        }]
    }, l.signalNotification = function() {
        APP.log(l.l("signal_msg") + imdi_environment.version)
    }, l.eraseAll = function() {
        APP.confirm(r("confirm_erasing_actors_db"), function(e) {
            e || (l.actors.reset(), APP.log(r("all_actors_deleted")), n())
        }, r("no"), r("yes_delete_all_actors"))
    }, l.show = function(e) {
        if (0 != l.actors.length) {
            var n = l.actors.getIndexByID(e);
            void 0 === n && (n = 0), l.createFormIfNotExistent(), o(n), l.languages.clearActiveActorLanguages(), l.actors.setPointer(e), l.refreshFormTitle();
            var s = l.actors.getActive();
            APP.forms.fill(_, l.element_id_prefix, s), t()
        }
    }, l.refreshFormTitle = function() {
        var e = g(l.element_id_prefix + "form_title"),
            n = l.actors.getActive().name;
        e.innerHTML = "" == n ? r("unnamed_actor") : n
    }, l.export_actors = function() {
        if (0 !== l.actors.length) {
            var e = JSON.stringify(l.actors.getState());
            APP.saveTextfile(e, "actors.json", APP.CONF.file_download_header)
        } else APP.alert(r("there_are_no_actors"))
    }, l.handleImportFileInputChange = function(e) {
        var t = e.target.files,
            o = t[0];
        readFileAsText(o, function(e) {
            var t;
            try {
                t = JSON.parse(e)
            } catch (n) {
                if (window.DOMParser) {
                    var o = new DOMParser,
                        s = o.parseFromString(e, "text/xml");
                    t = i(s)
                }
            }
            if (t) {
                if (!c()) return APP.alert(r("please_give_all_actors_a_name_before_creating_new_one")), !1;
                t.info && "ObjectList state" == t.info && (t = t.list);
                for (var a = 0; a < t.length; a++) l.createNewActor(t[a]);
                n(), APP.log(t.length + " " + r("actors_imported"))
            }
        })
    }, l.createFormIfNotExistent = function() {
        var e = g("actor_view");
        if (!e) {
            e = dom.make("div", "actor_view", "actor_view", l.module_view), e.innerHTML = "";
            var n = dom.make("div", l.element_id_prefix + "title_div", "", e);
            dom.make("h1", l.element_id_prefix + "form_title", "", n, r("new_actor")), dom.make("div", l.element_id_prefix + "content_div", "", e), APP.forms.make(g(l.element_id_prefix + "content_div"), _, l.element_id_prefix, l.element_id_prefix, void 0, l.languages.makeInputInForm), g(l.element_id_prefix + "name").addEventListener("blur", l.saveActiveActor), g(l.element_id_prefix + "role").addEventListener("blur", l.saveActiveActor)
        }
    }, l.duplicateActiveActor = function() {
        l.actors.duplicateActive(), n(), APP.log(r("actor_saved_and_duplicated"), "success")
    }, l.saveActiveActor = function() {
        if (-1 != l.actors.getPointer()) {
            var e = s();
            return l.save(e), n(), l.refreshFormTitle(), e
        }
    }, l.save = function(n) {
        return l.actors.replaceActive(n), e.updateActorNameInAllSessions(n.id), n
    }, l.createNewActor = function(e) {
        if (l.saveActiveActor(), !c()) return APP.alert(r("please_give_all_actors_a_name_before_creating_new_one")), !1;
        e || (e = APP.forms.createEmptyObjectFromTemplate(_));
        var t = l.actors.add(e);
        return l.createFormIfNotExistent(), n(), l.show(t), !0
    }, l.handleClickOnDeleteActor = function() {
        if (-1 != typeof l.actors.pointer) {
            var e, n = l.actors.getActive().name;
            e = "" == n ? r("really_erase_this_actor") : r("really_erase_before_name") + n + r("really_erase_after_name"), APP.confirm(e, function(e) {
                e || (l.deleteActiveActor(), APP.log(r("actor_deleted_before_name") + n + r("actor_deleted_after_name")))
            }, r("no"), r("yes_delete_actor"))
        }
    }, l.deleteActiveActor = function() {
        l.actors.removeActive(), n()
    };
    var d = function(e, n) {
        var t = dom.make("div", l.element_id_prefix + "list_entry_" + n, l.element_id_prefix + "list_entry", g(l.element_id_prefix + "list")),
            o = "" != e.name ? e.name : r("unnamed_actor");
        dom.h2(t, o), dom.p(t, e.role), t.addEventListener("click", function(e) {
            return function() {
                a(e)
            }
        }(n), !1)
    };
    return l
}(), imdi_environment.workflow[2].languages = function() {
    "use strict";
    var e = {},
        n = imdi_environment.workflow[2];
    e.LOAA = new ObjectList, e.parent = imdi_environment;
    var t = e.parent.l;
    return e.element_id_prefix = n.element_id_prefix + "languages_", e.init = function(e) {}, e.makeInputInForm = function(n, t, o, s) {
        "actor_languages" == n.name && APP.GUI.makeLanguageSearchForm(t, o, !1, !1, e.addFromForm)
    }, e.remove = function(n) {
        e.LOAA.removeByID(n), dom.remove(e.element_id_prefix + n + "_div")
    }, e.refreshLanguagesOfActiveActorInArray = function() {
        e.LOAA.forEach(function(e) {
            e.MotherTongue = g("mothertongue_" + e.id).checked, e.PrimaryLanguage = g("primarylanguage_" + e.id).checked
        })
    }, e.clearActiveActorLanguages = function() {
        e.LOAA.reset(), g(e.element_id_prefix + "display").innerHTML = ""
    }, e.set = function(t) {
        e.LOAA.add(t), n.actors.getActive().languages.actor_languages = e.LOAA.getAll(), e.renderActorLanguage(g(e.element_id_prefix + "display"), t)
    }, e.renderActorLanguage = function(o, s) {
        var i = dom.make("div", e.element_id_prefix + s.id + "_div", e.element_id_prefix + "entry", o);
        APP.GUI.icon(i, "", "delete_lang_icon", "reset", function(e) {
            return function() {
                n.languages.remove(e)
            }
        }(s.id)), dom.spanBR(i, "", "", "ISO639-3 Code: " + s.iso_code), dom.spanBR(i, "", "", "Name: " + s.name), dom.spanBR(i, "", "", "Country ID: " + s.country_id);
        var a = dom.input(i, "mothertongue_" + s.id, "", "", "checkbox");
        !0 === s.MotherTongue && (a.checked = !0), dom.span(i, "", "", t("languages", "mother_tongue") + "  "), a = dom.input(i, "primarylanguage_" + s.id, "", "", "checkbox"), !0 === s.PrimaryLanguage && (a.checked = !0), dom.span(i, "", "", t("languages", "primary_language"))
    }, e.addFromForm = function(n) {
        var t;
        t = 0 === e.LOAA.length;
        var o = {
            name: n[3],
            iso_code: n[0],
            country_code: n[1],
            type: n[2],
            MotherTongue: t,
            PrimaryLanguage: t
        };
        e.set(o)
    }, e
}(), imdi_environment.workflow[3] = function(e, n) {
    "use strict";
    var t = {};
    t.parent = imdi_environment;
    var o = t.parent.l,
        s = void 0;
    t.identity = {
        id: "session",
        title: "Sessions",
        icon: "edit"
    }, t.sessions = new ObjectList, t.resource_id_counter = 0, t.dom_element_prefix = "session_", t.reset = function() {
        t.sessions.reset(), i()
    }, t.init = function(e) {
        t.sessions.reset(), t.resource_id_counter = 0, s = t.parent.session_form();
        var n = {
            deleteSession: t.userErase,
            newSession: t.newSession,
            addActor: t.addActor,
            addResource: t.addResource,
            removeActor: t.removeActor,
            removeResource: t.removeResource,
            setResourceIDCounterBiggerThan: function(e) {
                t.resource_id_counter <= e && (t.resource_id_counter = e + 1)
            }
        };
        t.GUI.init(e, n), t.GUI.createCopySessionOptions(s.fields_to_copy), i()
    }, t.deleteSession = function(e) {
        t.refreshSessionsArray(), t.sessions.removeByID(e), i()
    }, t.view = function() {
        t.GUI.view()
    }, t.recall = function(e) {
        if (1 == Array.isArray(e)) {
            t.sessions.reset();
            for (var n = 0; n < e.length; n++) t.sessions.add(e[n])
        } else t.sessions.setState(e);
        i()
    }, t.getSaveData = function() {
        return t.refreshSessionsArray(), t.sessions.getState()
    }, t.refreshVisibleSessionsInArray = function() {
        forEach(t.GUI.pager.visible_items, t.refreshSessionInArray)
    }, t.refreshSessionInArray = function(e) {
        APP.forms.fillObjectWithFormData(e, t.dom_element_prefix + e.id + "_", s)
    }, t.functions = function() {
        return [{
            label: o("session", "new_session"),
            icon: "plus",
            id: "link_newSession",
            onclick: function() {
                t.newSession()
            }
        }, {
            label: o("session", "copy_session_1_metadata"),
            icon: "copy",
            id: "link_copy_sessions",
            wrapper_id: "copy_sessions_div",
            type: "function_wrap",
            sub_div: "copy_sessions_select",
            onclick: function() {
                if (t.sessions.length < 2) return void APP.log(o("session", "at_least_2_sessions_to_assign_metadata"), "error");
                APP.confirm(o("main", "really_overwrite_data"), function(e) {
                    e || t.assignSession1Metadata()
                }, o("main", "no"), o("main", "yes_overwrite_data"))
            }
        }, {
            label: o("session", "sort_by_name"),
            icon: "az",
            id: "session_link_sort_by_name",
            onclick: function() {
                t.sortAlphabetically()
            }
        }, {
            id: "environment_signal",
            icon: "textedit",
            label: o("environment", "signal"),
            onclick: function() {
                t.signalNotification()
            }
        }]
    }, t.newSession = function() {
        var e = APP.forms.createEmptyObjectFromTemplate(s);
        return e.expanded = !0, t.sessions.add(e), i(), e.id
    }, t.createNewSessionWithResources = function(e, n, a) {
        var r = APP.forms.createEmptyObjectFromTemplate(s);
        return r.session.name = strings.removeCharactersFromString(e, t.parent.not_allowed_chars), r.expanded = n, t.sessions.add(r), forEach(a, function(e) {
            t.addResource(r.id, e)
        }), APP.log(o("session", "new_session_has_been_created")), i(), r.id
    }, t.signalNotification = function() {
        APP.log(o("environment", "signal_msg") + imdi_environment.version)
    };
    var i = function() {
        t.GUI.refresh(t.sessions.getAll())
    };
    return t.getName = function(e) {
        return "" === t.sessions.get(e).name ? o("session", "unnamed_session") : o("session", "session") + ": " + t.sessions.get(e).name
    }, t.refreshActorLists = function(e) {
        t.GUI.refreshActorLists(t.sessions.getAll(), e)
    }, t.sortAlphabetically = function() {
        t.refreshSessionsArray(), t.sessions.sortBySubKey("session", "name"), i()
    }, t.refreshSessionsArray = function() {
        forEach(t.GUI.pager.visible_items, t.refreshSessionInArray)
    }, t.userErase = function(e) {
        APP.confirm(o("session", "really_erase_session"), function(n) {
            n || (t.refreshSessionsArray(), t.sessions.removeByID(e), i(), APP.log(o("session", "session_deleted")))
        }, o("main", "no"), o("session", "yes_delete_session"))
    }, t.getIndexFromResourceID = function(e) {
        for (var n, o = 0; o < t.sessions.length; o++) {
            for (n = 0; n < t.sessions.get(o).resources.resources.writtenResources.length; n++)
                if (t.sessions.get(o).resources.resources.writtenResources[n].id == e) return n;
            for (n = 0; n < t.sessions.get(o).resources.resources.mediaFiles.length; n++)
                if (t.sessions.get(o).resources.resources.mediaFiles[n].id == e) return n
        }
    }, t.addActor = function(e, s) {
        if (-1 == t.sessions.getByID(e).actors.actors.indexOf(s)) {
            if (1 != n.actors.IDexists(s)) return;
            t.sessions.getByID(e).actors.actors.push(s), i()
        } else APP.log(o("session", "this_actor_is_already_in_the_session"), "error")
    }, t.removeActor = function(e, n) {
        var o = t.sessions.getByID(e).actors.actors.indexOf(n);
        t.sessions.getByID(e).actors.actors.splice(o, 1), i()
    }, t.addResource = function(n, s, a) {
        t.refreshSessionsArray();
        if (!(s >= e.resources.length)) {
            var r = t.resource_id_counter,
                c = e.resources.get(s),
                l = e.getValidityOfFile(c.name).type;
            "Media File" == l ? ("mf", t.sessions.getByID(n).resources.resources.mediaFiles.push({
                name: c.name,
                size: c.size,
                id: r
            })) : "Written Resource" == l ? ("wr", t.sessions.getByID(n).resources.resources.writtenResources.push({
                name: c.name,
                size: c.size,
                id: r
            })) : (a || APP.alert(o("session", "unknown_file_problem__before_filename") + "<br>" + c.name + "<br>" + o("session", "unknown_file_problem__after_filename")), "wr", t.sessions.getByID(n).resources.resources.writtenResources.push({
                name: c.name,
                size: c.size,
                id: r
            }));
            var _;
            if (-1 != s ? (_ = c.name, c.size) : (_ = "", ""), "eaf" == strings.getFileTypeFromFilename(_) && "YYYY" == t.sessions.getByID(n).session.date.year) {
                var d = dates.parseDate(c.name);
                null !== d && (t.sessions.getByID(n).session.date = d, APP.log(o("session", "session_date_extracted_from_eaf_file_name") + ": " + d.year + "-" + d.month + "-" + d.day))
            }
            return i(), t.resource_id_counter += 1, r
        }
    }, t.removeResource = function(e, n) {
        var o = getArrayWithIDs(t.sessions.getByID(e).resources.resources.mediaFiles); - 1 != getArrayWithIDs(t.sessions.getByID(e).resources.resources.writtenResources).indexOf(n) && t.sessions.getByID(e).resources.resources.writtenResources.splice(t.getIndexFromResourceID(n), 1), -1 != o.indexOf(n) && t.sessions.getByID(e).resources.resources.mediaFiles.splice(t.getIndexFromResourceID(n), 1), i()
    }, t.assignSession1Metadata = function() {
        var e = s;
        forEach(e.fields_to_copy, function(e) {
            if (g(APP.CONF.copy_checkbox_element_prefix + e.name).checked) {
                if ("actors" == e.name)
                    for (var n = 1; n < t.sessions.length; n++) t.removeAllActors(t.sessions.idOf(n)), forEach(t.sessions.get(0).actors.actors, function(e) {
                        t.addActor(t.sessions.idOf(n), e)
                    });
                t.copyFieldsToAllSessions(e.fields)
            }
        }), i(), APP.log(o("session", "session_1_metadata_assigned_to_all_sessions"))
    }, t.copyFieldsToAllSessions = function(e) {
        for (var n = 1; n < t.sessions.length; n++) forEach(e, function(e) {
            "session_date" == e && (t.sessions.get(n).session.date = cloneObject(t.sessions.get(0).session.date)), "session_location" == e && (t.sessions.get(n).session.location = cloneObject(t.sessions.get(0).session.location)), "content" == e && (t.sessions.get(n).content = cloneObject(t.sessions.get(0).content)), "project" == e && (t.sessions.get(n).project = cloneObject(t.sessions.get(0).project)), "actors_description" == e && (t.sessions.get(n).actors.description = t.sessions.get(0).actors.description)
        })
    }, t.removeAllActors = function(e) {
        for (; t.sessions.getByID(e).actors.actors.length > 0;) t.removeActor(e, t.sessions.getByID(e).actors.actors[0])
    }, t.refreshResourcesOfAllSessions = function() {
        for (var e = t.GUI.pager.visible_items, n = 0; n < e.length; n++) t.GUI.refreshResources(e[n].id)
    }, t.areAllSessionsNamed = function() {
        return !t.sessions.isThereAnyItemWhereSubKeyIsValue("session", "name", "")
    }, t.areAllSessionsProperlyNamed = function() {
        if (0 == t.areAllSessionsNamed()) return !1;
        for (var e = 0; e < t.sessions.length; e++)
            for (var n = 0; n < t.parent.not_allowed_chars.length; n++)
                if (-1 != t.sessions.get(e).session.name.indexOf(t.parent.not_allowed_chars[n])) return !1;
        return !0
    }, t.doesEverySessionHaveAProjectName = function() {
        return !t.sessions.isThereAnyItemWhereSubKeyIsValue("project", "name", "")
    }, t.updateActorNameInAllSessions = function(e) {
        t.GUI.updateActorNameInAllSessions(e)
    }, t.checkAllSessionNamesForInvalidChars = function() {
        forEach(t.sessions, t.checkSessionNameForInvalidChar), i()
    }, t.checkSessionNameForInvalidChar = function(e) {
        var n = get("session_" + e.id + "_session_name");
        n = strings.replaceAccentBearingLettersWithASCISubstitute(n), n = strings.removeAllCharactersFromStringExcept(n, "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_"), e.session.name = n, i()
    }, t
}(imdi_environment.workflow[1], imdi_environment.workflow[2]), imdi_environment.workflow[3].GUI = function() {
    "use strict";
    var e = {};
    e.parent = imdi_environment;
    var n = e.parent.l,
        t = imdi_environment.workflow[1],
        o = imdi_environment.workflow[2],
        s = imdi_environment.workflow[3];
    e.dom_element_prefix = "session_";
    var i, a, r;
    return e.init = function(n, t) {
        i = e.parent.session_form(), a = n, r = t;
        var o = {
            render: e.renderSession,
            on_page_change: e.refresh,
            items_list: s.sessions.getAll(),
            view: n,
            items_per_page: 10,
            before_page_change: s.refreshVisibleBundlesInArray
        };
        e.pager = new APP.GUI.pager(o)
    }, e.view = function() {
        APP.GUI.scrollTop(), e.pager.refresh(s.sessions.getAll())
    }, e.createCopySessionOptions = function(e) {
        var t = g("copy_sessions_select");
        if (!e) return void dom.span(t, "", "", n("function_currently_unavailable"));
        var o = e;
        forEach(o, function(e) {
            dom.input(t, APP.CONF.copy_checkbox_element_prefix + e.name, "", "", "checkbox").checked = !0, dom.spanBR(t, "", "", " " + e.label)
        })
    }, e.refreshResources = function(o) {
        var s = g(e.dom_element_prefix + o + "_resources_add_mf_div");
        s.innerHTML = "";
        var i = document.createElement("select");
        if (dom.setSelectOptions(i, t.resources.getAll(), "name", "take_index"), t.resources.length > 0 && (s.appendChild(i), dom.br(s), dom.button(s, n("session", "add_to_session"), function(e) {
                return function() {
                    r.addResource(e, i.selectedIndex)
                }
            }(o))), 0 === t.resources.length) {
            var a = dom.h5(s, n("session", "no_files_have_been_added") + "<br>");
            dom.link(a, "", "", n("session", "add_some_files"), function() {
                APP.view(t)
            })
        }
    }, e.refresh = function(n) {
        g(APP.CONF.view_id_prefix + "session").innerHTML = "", e.pager.refresh(n), forEach(e.pager.visible_items, e.renderSession), 0 === n.length && e.displayNoSessionText()
    }, e.refreshActorLists = function(n, t) {
        for (var o = getArrayWithIDs(t), s = 0; s < e.pager.visible_items.length; s++) e.refreshActorListInSession(e.pager.visible_items[s], o)
    }, e.renderSession = function(t) {
        var o = t.id,
            s = t.expanded,
            c = e.dom_element_prefix + o;
        g("no_session_text") && (a.innerHTML = "");
        var l = APP.GUI.FORMS.expandableForm(a, c, s, function(e) {
            t.expanded = e.expanded
        }, r.deleteSession, o);
        l.delete_icon.alt = n("session", "delete_session"), l.delete_icon.title = n("session", "delete_session"), l.display_icon.alt = n("session", "expand_collapse_session"), l.display_icon.title = n("session", "expand_collapse_session"), APP.forms.make(l.content, i, c + "_", e.dom_element_prefix, t, e.makeSpecialFormInput);
        var _ = g(c + "_session_name");
        _.addEventListener("blur", function() {
            e.refreshSessionHeading(t)
        }), _.addEventListener("input", function() {
            if (!g("preserve_hyphens").on && -1 != _.value.indexOf("-")) return APP.log("Hyphens are not allowed in the session name!", "error"), _.value = strings.removeCharactersFromString(_.value, "-"), !1
        }), forEach(t.actors.actors, function(n) {
            e.renderActor(o, n)
        }), void 0 !== t.resources.resources.writtenResources && forEach(t.resources.resources.writtenResources, function(n) {
            e.renderResource(n.id, o, "wr", n.name, n.size), r.setResourceIDCounterBiggerThan(n.id)
        }), void 0 !== t.resources.resources.mediaFiles && forEach(t.resources.resources.mediaFiles, function(n) {
            e.renderResource(n.id, o, "mf", n.name, n.size), r.setResourceIDCounterBiggerThan(n.id)
        }), e.refreshActorListInSession(t), e.refreshSessionHeading(t), e.refreshResources(o)
    }, e.makeSpecialFormInput = function(e, n, t, o) {
        "actors" == e.name && (dom.br(n), dom.make("div", t + "actors", "actors", n), dom.make("div", t + "addActors_div", "actors", n)), "resources" == e.name && (dom.make("div", t + "resources", "mfs", n), dom.make("div", t + "add_mf_div", "", n))
    }, e.refreshActorName = function(t, s) {
        var i = "" != o.actors.getByID(s).name ? o.actors.getByID(s).name : n("actors", "unnamed_actor"),
            a = e.dom_element_prefix + t + "_actor_" + s + "_label",
            r = g(a);
        r.innerHTML = "<h2 class='actor_name_disp'>" + i + "</h2>", r.innerHTML += "<p class='actor_role_disp'>" + o.actors.getByID(s).role + "</p>"
    }, e.refreshActorListInSession = function(t) {
        var s = o.actors,
            i = g(e.dom_element_prefix + t.id + "_actors_addActors_div");
        i.innerHTML = "";
        var a = document.createElement("select");
        if (s.forEach(function(e, t) {
                var o = "" != e.name ? e.name : n("actors", "unnamed_actor"),
                    s = o + " (" + e.role + ")";
                dom.appendOption(a, s, t)
            }), s.length > 0 && (i.appendChild(a), a.selectedIndex = 0, dom.br(i), dom.button(i, n("session", "add_to_session"), function(e) {
                return function() {
                    var n = s.IDof(a.selectedIndex);
                    r.addActor(e, n)
                }
            }(t.id))), 0 === s.length) {
            var c = dom.h5(i, n("session", "no_actors_in_db_yet") + "<br>");
            dom.link(c, "", "", n("session", "create_some_actors"), function() {
                APP.view(o)
            })
        }
        forEach(t.actors.actors, function(e) {
            -1 == s.getArrayWithIDs().indexOf(e) && r.removeActor(t.id, e)
        })
    }, e.displayNoSessionText = function() {
        a.innerHTML = "";
        var e = dom.make("h2", "no_session_text", "no_session_text", a);
        e.innerHTML = n("session", "this_corpus_contains_no_sessions_yet") + " " + n("session", "why_not_create_one__before_link"), dom.make("a", "new_session_link", "new_session_link", e).innerHTML = n("session", "why_not_create_one__link"), e.innerHTML += n("session", "why_not_create_one__after_link"), g("new_session_link").addEventListener("click", function() {
            r.newSession()
        }), a.scrollTop = 0
    }, e.renderActor = function(n, t) {
        if (void 0 != o.actors.getIndexByID(t)) {
            dom.make("div", e.dom_element_prefix + n + "_actor_" + t, "actor_in_session_wrap", g(e.dom_element_prefix + n + "_actors_actors"));
            dom.make("div", e.dom_element_prefix + n + "_actor_" + t + "_label", "actor_in_session", g(e.dom_element_prefix + n + "_actor_" + t));
            e.refreshActorName(n, t), APP.GUI.icon(g(e.dom_element_prefix + n + "_actor_" + t), "delete_actor_" + t + "_icon", "delete_actor_icon", "reset", function(e, n) {
                return function() {
                    r.removeActor(e, n)
                }
            }(n, t))
        }
    }, e.renderResource = function(n, t, o, s, i) {
        var a = dom.make("div", e.dom_element_prefix + t + "_mediafile_" + n, o, g(e.dom_element_prefix + t + "_resources_resources")),
            c = dom.h3(a);
        if ("wr" == o) c.innerHTML = "Written Resource";
        else {
            if ("mf" != o) return;
            c.innerHTML = "Media File"
        }
        APP.GUI.icon(a, "delete_resource_" + n + "_icon", "delete_resource_icon", "reset", function(e, n) {
            return function() {
                r.removeResource(e, n)
            }
        }(t, n)), dom.span(a, "", "resource_file_content_span", 'File Name<br><input type="text" name="' + e.dom_element_prefix + t + "_mediafile_" + n + '_name" value=""><br>Size<br><input type="text" name="' + e.dom_element_prefix + t + "_mediafile_" + n + '_size" value="">'), a.getElementsByTagName("input")[0].value = s, a.getElementsByTagName("input")[1].value = i
    }, e.refreshSessionHeading = function(t) {
        var o = t.id,
            s = g(e.dom_element_prefix + o + "_label");
        t.session && t.session.name && "" !== t.session.name ? s.innerHTML = n("session", "session") + ": " + t.session.name : s.innerHTML = n("session", "unnamed_session")
    }, e.updateActorNameInAllSessions = function(n) {
        e.pager.visible_items.forEach(function(t) {
            -1 != t.actors.actors.indexOf(n) && e.refreshActorName(t.id, n)
        })
    }, e
}(), imdi_environment.workflow[4] = function() {
    "use strict";
    var e, n, t, o, s = {};
    s.parent = imdi_environment;
    var i = s.parent.l;
    return s.identity = {
        id: "xml_output",
        title: "XML Output",
        icon: "data"
    }, s.not_allowed_chars = " !\"§$%&/\\()=?^°`´'#*+~<>[]{}|²³,.;:", s.init = function() {
        e = imdi_environment.workflow[0], n = imdi_environment.workflow[3], t = imdi_environment.workflow[1], o = imdi_environment.workflow[2], s.createOutputFormatSelect(s.formats())
    }, s.formats = function() {
        return [{
            title: i("output", "imdi"),
            name: "imdi",
            file_ending: "imdi",
            output_name: "IMDI",
            generator_object: imdi_environment.imdi_generator
        }, {
            title: i("output", "cmdi_with_imdi_profile"),
            name: "cmdi-imdi",
            file_ending: "cmdi",
            output_name: "CMDI",
            generator_object: imdi_environment.cmdi_generator
        }]
    }, s.createOutputFormatSelect = function(e) {
        var n = g("output_format_select");
        dom.makeRadios(n, e, "output_format", "output_format_radio_", "title", "name", 0, void 0)
    }, s.view = function() {
        return APP.save(), "" === get("corpus_name") && 0 === n.sessions.length ? (APP.alert(i("output", "you_must_create_some_sessions_first")), void APP.view(n)) : "" === get("corpus_name") || e.isCorpusProperlyNamed() ? n.areAllSessionsNamed() ? n.areAllSessionsProperlyNamed() ? n.doesEverySessionHaveAProjectName() ? void s.generate() : (APP.alert(i("output", "every_session_must_have_a_project_name")), void APP.view(n)) : (APP.view(n), void APP.alert(i("output", "sessions_must_have_proper_name") + "<br>" + i("output", "not_allowed_chars_are") + s.not_allowed_chars + "<br>" + i("output", "spaces_are_not_allowed_either"))) : (APP.view(n), void APP.alert(i("output", "sessions_must_have_name"))) : (APP.view(e), void APP.alert(i("output", "corpus_must_have_proper_name") + "<br>" + i("output", "not_allowed_chars_are") + s.not_allowed_chars + "<br>" + i("output", "spaces_are_not_allowed_either")))
    }, s.functions = function() {
        return [{
            id: "link_export_corpus",
            icon: "download",
            label: i("output", "download_corpus_including_all_sessions"),
            onclick: function() {
                APP.saveAllOutputFiles()
            }
        }, {
            id: "link_export_corpus_as_zip",
            icon: "download",
            label: i("output", "download_zip_archive"),
            onclick: function() {
                APP.zipAllOutputFiles()
            }
        }, {
            id: "environment_signal",
            icon: "textedit",
            label: i("environment", "signal"),
            onclick: function() {
                s.signalNotification()
            }
        }]
    }, s.signalNotification = function() {
        APP.log(i("environment", "signal_msg") + imdi_environment.version)
    }, s.generate = function() {
        var a, r = g("VIEW_xml_output");
        r.innerHTML = "";
        var c = dom.getSelectedRadioIndex("output_format"),
            l = {
                corpus: e.getSaveData(),
                content_languages: e.getSaveData().content_languages.list,
                resources: t.resources.getAll(),
                sessions: n.sessions.getAll(),
                actors: o.actors.getAll()
            },
            _ = s.formats()[c],
            d = new _.generator_object(l, i),
            m = _.output_name,
            u = _.file_ending;
        "" !== get("corpus_name") && (a = get("corpus_name") + "." + u, APP.GUI.createXMLOutputDIV(r, m + " Corpus", "textarea_corpus", d.corpus, a)), n.sessions.forEach(function(e, n) {
            a = e.session.name + "." + u, APP.GUI.createXMLOutputDIV(r, m + " Session " + (n + 1), "textarea_session_" + n, d.sessions[n], a)
        })
    }, s
}();