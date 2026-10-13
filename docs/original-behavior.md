# T-Notas shipped behavior

Evidence: REA inspect_managed_members for Windows Assembly-CSharp.dll, complete CIL decode saved in instructions.json/cil-readable.txt; Unity serialized RangeButton fields in level3, NoteButton fields level4/5, resource TextAssets and static FieldRVA data.

Natural-note reading only. Four clefs Treble/Bass/Alto/Grand (Sol,Fá,Dó,combined Sol+Fá). Six phases per clef, identical positions. Digits1..7 correspond C,D,E,F,G,A,B displayed Dó,Ré,Mi,Fá,Sol,Lá,Si. Answer ignores octave. No sharps/flats or enharmonics. Note plays sound immediately when shuffled. Grand randomly selects one staff50/50 and hides note in other; response delegated to selected staff.

Question generator Range chooses primary set if random<=ratio or secondary empty, otherwise secondary. Position uniform within selected set. Staff.Shuffle rejects immediate repetition of identical noteIndex; in Grand each substaff retains its own last position. Same note name in another octave may repeat.

Phases1 lines7,9,11,13,15;2 spaces8,10,12,14;3 inclusive7..15;4 primary4,5,17,18 vs secondary6..16 probability50/50;5 primary0..5,17..22 vs secondary6..16 probability50/50;6 uniform0..22. Phase1 first line7 maps trebleE,bassG,altoF. Staff letter formula(position+offset)%7 with offsets2,4,3. Staff bottom lines conventional E4/G2/F3 correspond positions7. Ledger lines spaced at odd positions1/3/5/17/19/21.

Practice toggles lines/spaces/supplementaries, default lines+spaces true and ledger false. Both line/space may not be disabled; UI disables switching off last one. Practice lines7/9/11/13/15; spaces6/8/10/12/14/16 (note these include outer spaces beyond phase2). Ledger adds lines1/3/5/17/19/21 and spaces0/2/4/6/16/18/20/22. Range AddPrimaryValues preserves duplicates; positions6 and16 receive double weight when practice spaces+ledger are enabled. Practice no goal/errors limit, elapsed stopwatch until Finalizar. Profile progression and difficulty per clef; first phase unlocked, pass unlocks next, changing difficulty resets that clef.

Timer goal/streak rules same sister apps: victory only on timer expiry if hits>=goal; reaching goal does not stop. Consecutive errors hitting threshold loses early. Correct increments immediately, resets streak, green0.5sec; wrong clicked red/correct green, miss counted after1/2/3sec pause. Timer advances through pauses. Difficulty table in gameplay.json.

Theory resources staff/gclef/fclef/cclef/comparision plus About text. Original poems support memorization and audio examples within chapters. Build has actual profile,practice,exercise,victory/defeat and theory scenes. No theory 'comparison' gameplay mode.

Artifacts: gameplay.json normalized exact definitions; exercise-configs.json serialized phase field source; managed-members.json REA-derived subset; instructions.json and cil-readable.txt full code; texts10 original textual assets; scene strings build paths/UI labels.

