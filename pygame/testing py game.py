import os
import pygame

os.chdir('C:/Users/Lucas Angulski/Documents/GitHub/python-game-test')

clock = pygame.time.Clock()

import sys
from pygame.locals import *

pygame.display.set_caption('Pygame Platformer')

pygame.init()


surf = pygame.transform.scale(display, WINDOW_SIZE)
screen.blit(surf, (0, 0))


#KEY COLOR :
# player_image.set_colorkey((255,255,255)

WINDOW_SIZE = (600, 400)
screen = pygame.display.set_mode(WINDOW_SIZE, 0, 32)  # start the window
display = pygame.Surface((500, 300))
#class Spritesheet:
#    def __init__(self,filename):
#    #utility class for loading and parsing
#    self.spritesheet = pygame.image.load(filename).covert()
#
 #   def get_image(self,x ,y , width, height):
 #       image= pygame.Surface((width, height)):
 #       image.blit(self.spritesheet, (0,0), (x,y,width,height))
 #   return image

#class player(pygame.sprite.Sprite)

scroll = [0,0]

def load_map(path):
    f =open(path +'.txt','r')
    data = f.read()
    f.close()
    data = data.split('\n')
    game_map = []
    for row in data:
        game_map.append(list(row))
    return game_map

game_map = load_map('map')


global animation_frames
animation_frames = {}
def load_animation(path,frame_durations):
    global animation_frames
    animation_name = path.split('/')[-1]
    animation_frame_data = []
    n = 0
    for frame in frame_durations:
        animation_frame_id = animation_name + '_' + str(n)
        img_loc = path + '/' + animation_frame_id + '.png'
        # player_animations/idle/idle_0.png
        animation_image = pygame.image.load(img_loc)
        animation_image.set_colorkey((255,255,255))
        animation_frames[animation_frame_id] = animation_image.copy()
        for i in range(frame):
            animation_frame_data.append(animation_frame_id)
        n += 1
    return animation_frame_data

def change_action (action_var,frame,new_value):
    if action_var !=new_value:
        action_var = new_value
        frame=0
    return action_var,frame

animation_database = {}

animation_database['idle'] = load_animation('player_animations/idle',[10,10,15])
animation_database['run'] = load_animation('player_animations/run',[7,7])
player_action = 'idle'
player_frame = 0
player_flip = False


pygame.display.set_caption('TESTING A PLATAFORM GAME WINDOW')

terrein_image = pygame.image.load('Assets\Sprites\sub_terrein.png')

grounden_image = pygame.image.load('Assets\Sprites\ground_image.png')

column_image = pygame.image.load('Assets\Sprites\column.png').convert()

TILE_SIZE=31


background_objects = [[0.25,[120,10,70,400]],[0.25,[280,30,40,400]],[0.5,[30,40,40,400]],[0.5,[130,90,100,400]],[0.5,[300,80,120,400]]]


def collision_test(rect, tiles):
    hit_list = []
    for tile in tiles:
        if rect.colliderect(tile):
            hit_list.append(tile)
    return hit_list

def move(rect, movement, tiles):
    collision_types = {'top': False, 'bottom': False, 'right': False, 'left': False}
    rect.x += movement[0]
    hit_list = collision_test(rect, tiles)
    for tile in hit_list:
        if movement[0] > 0:
            rect.right = tile.left
            collision_types['right'] = True
        elif movement[0] < 0:
            rect.left = tile.right
            collision_types['left'] = True
    rect.y += movement[1]
    hit_list = collision_test(rect, tiles)
    for tile in hit_list:
        if movement[1] > 0:
            rect.bottom = tile.top
            collision_types['bottom'] = True
        elif movement[1] < 0:
            rect.top = tile.bottom
            collision_types['top'] = True
    return rect, collision_types

moving_right = False
moving_left = False
attack_1 = False
attack_2 = False

player_y_momentum = 0
air_timer = 0

player_rect = pygame.Rect(100,100,50,90)
test_rect = pygame.Rect(100,100,63,50)

while True: # game loop


    display.fill((48,25,52))
    scroll[0] +=  (player_rect.x-scroll[0]-100)/20
    scroll[1] += (player_rect.y - scroll[1]-100)/20

    pygame.draw.rect(display,(85,23,122),pygame.Rect(0,150,500,300))
    for background_object in background_objects:
        obj_rect = pygame.Rect(background_object[1][0]-scroll[0]*background_object[0],background_object[1][1]-scroll[1]*background_object[0],background_object[1][2],background_object[1][3])
        if background_object[0] ==0.5:
            pygame.draw.rect(display, (14,222,150),obj_rect)
        else:
            pygame.draw.rect(display, (255, 222, 35), obj_rect)
    tile_rects = []
    y = 0
    for row in game_map:
        x = 0
        for tile in row:
            if tile == '1':
                display.blit(terrein_image, (x * TILE_SIZE-scroll[0], y * TILE_SIZE-scroll[1]))
            if tile == '2':
                display.blit(grounden_image, (x * TILE_SIZE-scroll[0], y * TILE_SIZE-scroll[1]))
            if tile != '0':
                tile_rects.append(pygame.Rect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE))
            x += 1
        y += 1

    player_movement = [0, 0]
    if moving_right:
        player_movement[0] += 3
    if moving_left:
        player_movement[0] -= 3
    player_movement[1] += player_y_momentum
    player_y_momentum += 0.1
    if player_y_momentum > 3:
        player_y_momentum = 3

    if player_movement[0] == 0:
        player_action, player_frame = change_action(player_action, player_frame, 'idle')
    if player_movement[0] > 0:
        player_flip = False
        player_action, player_frame = change_action(player_action, player_frame, 'run')
    if player_movement[0] < 0:
        player_flip = True
        player_action, player_frame = change_action(player_action, player_frame, 'run')


    player_rect, collisions = move(player_rect, player_movement, tile_rects)

    if collisions['bottom']:
        player_y_momentum = 0
        air_timer = 0
    else:
        air_timer += 1

    player_frame += 1
    if player_frame >= len(animation_database[player_action]):
        player_frame = 0
    player_img_id = animation_database[player_action][player_frame]
    player_img = animation_frames[player_img_id]
    display.blit(pygame.transform.flip(player_img, player_flip, False),
                 (player_rect.x - scroll[0], player_rect.y - scroll[1]))

    for event in pygame.event.get(): # event loop
        if event.type == QUIT: # check for window quit
            pygame.quit() # stop pygame
            sys.exit() # stop script
        if event.type == KEYDOWN:
            if event.key == K_RIGHT:
                moving_right = True
            if event.key == K_LEFT:
                moving_left = True
            if event.key == K_UP:
                if air_timer < 6:
                    player_y_momentum = -5
        if event.type == KEYUP:
            if event.key == K_RIGHT:
                moving_right = False
            if event.key == K_LEFT:
                moving_left = False

    surf = pygame.transform.scale(display, WINDOW_SIZE)
    screen.blit(surf, (0, 0))
    pygame.display.update() # update display
    clock.tick(60) # maintain 60 fps
