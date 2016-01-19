#pragma once

void translation_init(char* data);

void translation_deinit(void);

static void changeText(int step, const char* font);

void animate_quote(int pixels_to_scroll_by);
void anim_stopped_handler(Animation* animation, bool finished, void* context);
