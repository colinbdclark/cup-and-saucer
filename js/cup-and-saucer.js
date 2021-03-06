    fluid.defaults("colin.cupAndSaucer", {
        gradeNames: [
            "aconite.animator.playable",
            "aconite.animator.debugging",
            "aconite.videoSequenceCompositor"
        ],

        uniformModelMap: {},

        components: {
            glRenderer: {
                type: "colin.cupAndSaucer.glRenderer"
            },

            playButton: {
                options: {
                    playDelay: 2
                }
            },

            top: {
                type: "colin.cupAndSaucer.topSequencer"
            },

            bottom: {
                type: "colin.cupAndSaucer.bottomSequencer"
            }
        }
    });


    fluid.defaults("colin.cupAndSaucer.glRenderer", {
        gradeNames: "aconite.videoCompositor.glRenderer",

        shaders: {
            fragment: "shaders/cup-and-saucer.frag",
            vertex: "node_modules/aconite/src/shaders/stageVertexShader.vert"
        },

        uniforms: {}
    });


    fluid.defaults("colin.cupAndSaucer.sequencer", {
        gradeNames: "aconite.clipSequencer.static",

        clip: {
            url: "videos/cup-and-saucer.m4v",
            outTime: "00:48:43"
        },

        model: {
            clipSequence: [
                "{that}.options.clip"
            ]
        }
    });


    fluid.defaults("colin.cupAndSaucer.topSequencer", {
        gradeNames: "colin.cupAndSaucer.sequencer",

        clip: {
            inTime: "00:00:00:00",
        },

        components: {
            layer: {
                type: "aconite.videoCompositor.topLayer"
            }
        }
    });


    fluid.defaults("colin.cupAndSaucer.bottomSequencer", {
        gradeNames: "colin.cupAndSaucer.sequencer",

        clip: {
            inTime: "00:00:00:24",
        },

        components: {
            layer: {
                type: "aconite.videoCompositor.bottomLayer"
            }
        }
    });
