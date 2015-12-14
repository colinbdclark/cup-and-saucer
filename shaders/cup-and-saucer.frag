precision highp float;

uniform sampler2D topSampler;
uniform sampler2D bottomSampler;
uniform vec2 textureSize;

void main(void) {
    vec2 coords = vec2(gl_FragCoord.x / textureSize.x, gl_FragCoord.y / textureSize.y);
    vec4 topFrag = texture2D(topSampler, coords);
    vec4 bottomFrag = texture2D(bottomSampler, coords);

    float topLum = (topFrag.r * 0.2126 + topFrag.g * 0.7152 + topFrag.b * 0.0722);
    float bottomLum = (bottomFrag.r * 0.2126 + bottomFrag.g * 0.7152 + bottomFrag.b * 0.0722);
    float diff = topLum - bottomLum;
    float threshold = 0.1;

    gl_FragColor = diff > threshold ? bottomFrag : topFrag;
}
